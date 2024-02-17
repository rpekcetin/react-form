import React from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import { Grid } from '@mui/material';
import SelectWrapper from '../SelectWrapper';
import TextFieldWrapper from '../TextFieldWrapper';
import ButtonGroup from '../ButtonGroup'
import { OwnProps, ProductInfoFormData, Props } from './types/types';

const FirstStepForm: React.FC<Props> = ({ handleSubmit, handleNext, finished, productCategory, handleBack, activeStep, setActiveStep }) => (
  <form onSubmit={handleSubmit(handleNext)}>
    <Grid container spacing={3} px={5} py={12} justifyContent={'center'} alignItems={'flex-start'}>
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
      <Grid item xs={12} md={12}>
        <Field name="productDetails" required component={TextFieldWrapper} label="Ürün Detayları" multiline rows={5} />
      </Grid>
      <ButtonGroup handleBack={handleBack} activeStep={activeStep} finished={finished} />
    </Grid>

  </form>
);

const validate = (values: any) => {
  const errors: any = {};
  const touched: any = {}
  if (!values.productName || touched.productName) {
    errors.productName = 'Ürün Adı Giriniz!';
  }
  if (!values.productCategory) {
    errors.productCategory = 'Ürün Kategorisi Seçiniz !'
  }
  if (!values.productInsurance) {
    errors.productInsurance = 'Garanti Süresini Seçiniz !';
  }
  if (!values.productDetails) {
    errors.productDetails = 'Ürün Detayı Giriniz !';
  }
  return errors;
};

const ReduxFormWrapped = reduxForm<ProductInfoFormData, OwnProps>({
  form: 'firstForm',
  validate,
  destroyOnUnmount: false,
})(FirstStepForm);

const selector = formValueSelector('firstForm');
const mapStateToProps = (state: any) => {
  const productCategory: string = selector(state, 'productCategory');
  return { productCategory }
};

export default connect(mapStateToProps)(ReduxFormWrapped);
