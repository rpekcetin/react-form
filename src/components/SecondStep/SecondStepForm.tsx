import React, { useState } from 'react';
import { Field, reduxForm, InjectedFormProps, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import { Box, Button, MenuItem } from '@mui/material';
import TextFieldWrapper from '../TextFieldWrapper';

export interface ProductPricingFormData {
    productPrice: number;
    productStock: number;
    productDiscount: number
}

interface OwnProps {
    activeStep: number
    setActiveStep: React.Dispatch<React.SetStateAction<number>>
    handleBack: () => void
    handleNext: () => void
    finished: boolean
}

type Props = OwnProps & InjectedFormProps<ProductPricingFormData, OwnProps>;

const SecondStepForm: React.FC<Props> = ({ handleSubmit, handleNext, finished, handleBack, activeStep, setActiveStep }) => (
    <form onSubmit={handleSubmit(handleNext)}>
        <div>
            <Field
                name="productPrice"
                component={TextFieldWrapper}
                label="Ürün Fiyatı"
                type="number"
                parse={(value: any) => Number(value)}
                required
            />
        </div>
        <div>
            <Field
                name="productStock"
                component={TextFieldWrapper}
                label="Stok Miktarı"
                type="number"
                required
            />
        </div>
        <div>
            <Field
                name="productDiscount"
                component={TextFieldWrapper}
                defaultValue={0}
                label="İndirim Oranı (%) (Opsiyonel)"
                type="number"
                parse={(value: any) => Number(value)}
            />
        </div>
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
    </form>
);

const validate = (values: any) => {
    const errors: any = {};

    if (!values.productPrice) {
        errors.productPrice = 'Ürün fiyatı gereklidir';
    } else if (values.productPrice <= 0) {
        errors.productPrice = 'Ürün fiyatı pozitif bir değer olmalıdır';
    }

    if (values.productDiscount && values.productDiscount <= 0) {
        errors.productDiscount = 'İndirim oranı pozitif bir değer olmalıdır';
    }

    return errors;
};

const ReduxFormWrapped = reduxForm<ProductPricingFormData, OwnProps>({
    form: 'secondForm',
    validate,
    destroyOnUnmount: false,
})(SecondStepForm);

export default ReduxFormWrapped

