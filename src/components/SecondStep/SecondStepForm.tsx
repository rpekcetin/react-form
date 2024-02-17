import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Grid } from '@mui/material';
import TextFieldWrapper from '../TextFieldWrapper';
import ButtonGroup from '../ButtonGroup'
import { OwnProps, ProductPricingFormData, Props } from './types/types';


const SecondStepForm: React.FC<Props> = ({ handleSubmit, handleNext, finished, handleBack, activeStep, setActiveStep }) => (
    <form onSubmit={handleSubmit(handleNext)}>
        <Grid container spacing={3} px={5} py={12} justifyContent={'center'} alignItems={'flex-start'}>
            <Grid item xs={12} md={6}>
                <Field
                    name="productPrice"
                    component={TextFieldWrapper}
                    label="Ürün Fiyatı"
                    type="number"
                    parse={(value: any) => Number(value)}
                    required
                />
            </Grid>
            <Grid item xs={12} md={6}>
                <Field
                    name="productStock"
                    component={TextFieldWrapper}
                    label="Stok Miktarı"
                    type="number"
                    required
                />
            </Grid>
            <Grid item xs={12} md={6}>
                <Field
                    name="productDiscount"
                    component={TextFieldWrapper}
                    defaultValue={0}
                    label="İndirim Oranı (%) (Opsiyonel)"
                    type="number"
                    parse={(value: any) => Number(value)}
                />
            </Grid>
            <ButtonGroup handleBack={handleBack} activeStep={activeStep} finished={finished} />
        </Grid>
    </form>
);

const validate = (values: ProductPricingFormData) => {
    const errors: any = {};

    if (!values.productPrice) {
        errors.productPrice = 'Ürün fiyatı gereklidir!';
    } else if (values.productPrice <= 0) {
        errors.productPrice = 'Ürün fiyatı pozitif bir değer olmalıdır!';
    }

    if (!values.productStock) {
        errors.productStock = 'Stok Miktarı Giriniz!'
    } else if (values.productStock <= 0) {
        errors.productStock = 'Stok Miktarı 0 dan Küçük olamaz!';
    }

    if (values.productDiscount && values.productDiscount <= 0) {
        errors.productDiscount = 'İndirim oranı pozitif bir değer olmalıdır!';
    }

    return errors;
};

const ReduxFormWrapped = reduxForm<ProductPricingFormData, OwnProps>({
    form: 'secondForm',
    validate,
    destroyOnUnmount: false,
})(SecondStepForm);

export default ReduxFormWrapped

