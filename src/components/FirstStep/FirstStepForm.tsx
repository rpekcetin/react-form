import React, { useState } from 'react';
import { Field, reduxForm, InjectedFormProps, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import { Box, Button, Grid, MenuItem } from '@mui/material';
import SelectWrapper from '../SelectWrapper';
import TextFieldWrapper from '../TextFieldWrapper';
// Category ve Form verisi için yerel tip tanımlamaları
export interface Category {
  value: string;
  label: string;
}

interface ProductInfoFormData {
  productName: string;
  productCategory: string;
  productDetails: string;
  productInsurance?: string;
}

// Ekstra props için interface
interface OwnProps {
  productCategory: string,
  activeStep: number
  setActiveStep: React.Dispatch<React.SetStateAction<number>>
  handleBack: () => void
  handleNext: () => void
  finished: boolean
}

// Props türünü genişletme
type Props = OwnProps & InjectedFormProps<ProductInfoFormData, OwnProps>;

const FirstStepForm: React.FC<Props> = ({ handleSubmit, handleNext, finished, productCategory, handleBack, activeStep, setActiveStep }) => (
  <form onSubmit={handleSubmit(handleNext)}>
    <Grid container spacing={3} px={5} py={12} justifyContent={'center'} alignItems={'center'}>
      <Grid item xs={12} md={6}>
        <Field name="productName" type='text' required component={TextFieldWrapper} label="Ürün Adı" />
      </Grid>
      <Grid item xs={12} md={6} justifyContent={'center'} alignItems={'center'}>
        <Field
          name="productCategory"
          component={SelectWrapper}
          label="Ürün Kategorisi"
          required
          categories={[
            { value: 'elektronik', label: 'Elektronik' },
            { value: 'kitap', label: 'Kitap' },
            // Diğer kategoriler...
          ]}
        />
      </Grid>
      {productCategory === 'elektronik' && (
        <Grid item xs={12} md={6}>
          <Field name="productInsurance" required component={TextFieldWrapper} label="" type='date' />
        </Grid>
      )}
      <Grid item xs={12} md={6}>
        <Field name="productDetails" required component={TextFieldWrapper} label="Ürün Detayları" multiline />
      </Grid>
      <Grid item xs={12} md={8} mt={6}>
        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
          <Button
            color="inherit"
            disabled={activeStep === 0}
            onClick={handleBack}
            sx={{ mr: 1 }}
          >
            Back
          </Button>
          <Box sx={{ flex: '1 1 auto' }} />
          <Button type='submit'>
            {finished ? 'Finish' : 'Next'}
          </Button>
        </Box>
      </Grid>
    </Grid>

  </form>
);


// reduxForm tanımı
const ReduxFormWrapped = reduxForm<ProductInfoFormData, OwnProps>({
  form: 'firstForm',
  destroyOnUnmount: false,
})(FirstStepForm);

const selector = formValueSelector('firstForm');
const mapStateToProps = (state: any) => {
  const productCategory: string = selector(state, 'productCategory');
  return { productCategory }
};

export default connect(mapStateToProps)(ReduxFormWrapped);
