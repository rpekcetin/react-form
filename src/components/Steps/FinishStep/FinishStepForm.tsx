import React from 'react';
import { Grid } from '@mui/material';
import FirstStepForm from '../FirstStep/FirstStepForm';
import SecondStepForm from '../SecondStep/SecondStepForm'
import ThirdStepForm from '../ThirdStep/ThirdStepForm';
import FourthStepForm from '../FourthStep/FourthStepForm'
import { Field, FormErrors, reduxForm } from 'redux-form';
import CheckBoxWrapper from '../../CheckBoxWrapper';
import ButtonGroup from '../../ButtonGroup'
import { FinishFormData, OwnProps, Props } from './types/types';

const FinishStepForm: React.FC<Props> = ({ handleSubmit, handleNext, handleBack, activeStep, finished, setActiveStep }) => (
    <>
        <FirstStepForm finished={finished} isRead activeStep={activeStep} setActiveStep={setActiveStep} handleNext={handleNext} handleBack={handleBack} />
        <SecondStepForm finished={finished} isRead activeStep={activeStep} handleNext={handleNext} handleBack={handleBack} />
        <FourthStepForm finished={finished} isRead activeStep={activeStep} setActiveStep={setActiveStep} handleNext={handleNext} handleBack={handleBack} />
        <ThirdStepForm finished={finished} isRead activeStep={activeStep} setActiveStep={setActiveStep} handleNext={handleNext} handleBack={handleBack} />
        <form onSubmit={handleSubmit(handleNext)}>
            <Grid container px={5} mt={3} spacing={0} justifyContent="center">
                <Grid item xs={12}>
                    <Field
                        name="isReaded"
                        component={CheckBoxWrapper}
                        type="checkbox"
                        required
                        label="Okudum, Onaylıyorum"
                    />
                </Grid>
                <Grid item xs={12}>
                    <Field
                        name="privacyPolicy"
                        component={CheckBoxWrapper}
                        required
                        type="checkbox"
                        label="Gizlilik Politikasını Kabul Ediyorum"
                    />
                </Grid>
                <ButtonGroup handleBack={handleBack} activeStep={activeStep} finished={finished} />
            </Grid>
        </form>
    </>
);

const validate = (values: FinishFormData): FormErrors<FinishFormData> => {
    const errors: FormErrors<FinishFormData> = {};

    if (!values.isReaded) {
        errors.isReaded = 'Koşulları kabul etmelisiniz.';
    }

    if (!values.privacyPolicy) {
        errors.privacyPolicy = 'Gizlilik politikasını kabul etmelisiniz.';
    }

    return errors;
};

const ReduxFormWrapped = reduxForm<FinishFormData, OwnProps>({
    form: 'finishForm',
    validate,
    destroyOnUnmount: false,
})(FinishStepForm);

export default ReduxFormWrapped


