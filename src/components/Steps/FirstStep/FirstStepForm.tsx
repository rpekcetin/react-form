import React from 'react';
import { Field, reduxForm, formValueSelector, FormErrors } from 'redux-form';
import { connect } from 'react-redux';
import { Grid, InputLabel, Typography } from '@mui/material';
import SelectWrapper from '../../SelectWrapper';
import TextFieldWrapper from '../../TextFieldWrapper';
import ButtonGroup from '../../ButtonGroup'
import { OwnProps, ProductInfoFormData, Props } from './types/types';

const FirstStepForm: React.FC<Props> = ({ handleSubmit, handleNext, finished, productCategory, handleBack, activeStep, isRead }) => (
  <form onSubmit={handleSubmit(handleNext)}>
    <Grid container spacing={3} px={5} py={isRead ? 5 : 12} justifyContent={'center'} alignItems={'flex-start'}>
      <Grid item xs={12}>
        <Typography variant='h6' fontWeight={700} textAlign={'center'}>Ürün Bilgileri</Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <Field name="productName" disabled={isRead} type='text' required component={TextFieldWrapper} label="Ürün Adı" />
      </Grid>
      <Grid item xs={12} md={6} justifyContent={'center'} alignItems={'center'}>
        <Field
          name="productCategory"
          component={SelectWrapper}
          label="Ürün Kategorisi"
          disabled={isRead}
          required
          categories={[
            { value: 'elektronik', label: 'Elektronik' },
            { value: 'kitap', label: 'Kitap' },
            { value: 'kıyafet', label: 'Kıyafet' },
            { value: 'kozmetik', label: 'Kozmetik' },
          ]}
        />
      </Grid>
      {productCategory === 'elektronik' && (
        <Grid item xs={12} md={6}>
          <InputLabel>Garanti Süresi</InputLabel>
          <Field name="productInsurance" disabled={isRead} required component={TextFieldWrapper} type='date' />
        </Grid>
      )}
      <Grid item xs={12} md={12}>
        <Field name="productDetails" disabled={isRead} required component={TextFieldWrapper} label="Ürün Detayları" multiline rows={5} />
      </Grid>
      {
        isRead ?? (
          <ButtonGroup handleBack={handleBack} activeStep={activeStep} finished={finished} />
        )
      }
    </Grid>

  </form>
);

const validate = (values: ProductInfoFormData): FormErrors<ProductInfoFormData> => {
  const errors: FormErrors<ProductInfoFormData> = {};

  if (!values.productName) {
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

const asyncValidate = async (values: { productName: string }) => {
  const { productName } = values
  const errors: { productName?: string } = {}

  const existingNames = ["Telefon", "Tshirt", "Oje"]

  if (existingNames.includes(productName)) {
    errors.productName = 'Bu ürün adı zaten alınmış.'
    throw errors
  }

  return errors
};

const ReduxFormWrapped = reduxForm<ProductInfoFormData, OwnProps>({
  form: 'firstForm',
  validate,
  asyncValidate,
  asyncBlurFields: ['productName'],
  destroyOnUnmount: false,
})(FirstStepForm);

const selector = formValueSelector('firstForm');
const mapStateToProps = (state: ProductInfoFormData) => {
  const productCategory: string = selector(state, 'productCategory');
  return { productCategory }
};

export default connect(mapStateToProps)(ReduxFormWrapped);
