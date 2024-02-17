import React from 'react';
import { Field, reduxForm } from 'redux-form';
import FileInput from '../FileInput/FileInput';
import ButtonGroup from '../ButtonGroup'
import { Grid } from '@mui/material';
import { OwnProps, ProductImagesFormData, Props } from './types/types';

const ThirdStepForm: React.FC<Props> = ({
    handleSubmit,
    handleNext,
    finished,
    handleBack,
    activeStep,
}) => (
    <form onSubmit={handleSubmit(handleNext)}>
        <Grid container spacing={3} px={5} py={10} justifyContent={'center'} alignItems={'flex-start'}>
            <Grid item xs={12} md={6}>
                <Field
                    name="productImages"
                    component={FileInput}
                    label="Ürün Resimleri Yükle"
                    required
                />
            </Grid>
            <ButtonGroup finished={finished} handleBack={handleBack} activeStep={activeStep} />
        </Grid>
    </form>
);

const validate = (values: any) => {
    const errors: any = {};
    
    if (!values.productImages || values.productImages.length === 0) {
        errors.productImages = 'Ürün resmi yüklemek zorunludur';
    }
    return errors;
};

export default reduxForm<ProductImagesFormData, OwnProps>({
    form: 'thirdForm',
    validate,
    destroyOnUnmount: false,
})(ThirdStepForm);
