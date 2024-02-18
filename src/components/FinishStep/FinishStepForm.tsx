import React from 'react';
import { connect } from 'react-redux';
import { Grid, TextField, Typography } from '@mui/material';
import FirstStepForm from '../FirstStep/FirstStepForm';
import SecondStepForm from '../SecondStep/SecondStepForm'
import ThirdStepForm from '../ThirdStep/ThirdStepForm';
import FourthStepForm from '../FourthStep/FourthStepForm'

interface OwnProps {
    activeStep: number;
    setActiveStep: React.Dispatch<React.SetStateAction<number>>;
    handleBack: () => void;
    handleNext: () => void;
    finished: boolean;
}

interface StateProps {
    firstFormValues: any
    secondFormValues: any
    thirdFormValues: any
    fourthFormValues: any
}

// Props türünü genişletme
type Props = OwnProps & StateProps;

const FinishStepForm: React.FC<Props> = ({ firstFormValues, handleNext, secondFormValues, thirdFormValues, fourthFormValues, handleBack, activeStep, finished, setActiveStep }) => (
    <>
        <FirstStepForm finished={finished} isRead activeStep={activeStep} setActiveStep={setActiveStep} handleNext={handleNext} handleBack={handleBack} />
        <SecondStepForm finished={finished} isRead activeStep={activeStep} handleNext={handleNext} handleBack={handleBack} />
        <FourthStepForm finished={finished} isRead activeStep={activeStep} setActiveStep={setActiveStep} handleNext={handleNext} handleBack={handleBack} />
        <ThirdStepForm finished={finished} isRead activeStep={activeStep} setActiveStep={setActiveStep} handleNext={handleNext} handleBack={handleBack} />
    </>
    // <Grid container spacing={3} px={5} py={12} justifyContent={'center'} alignItems={'center'}>
    //     <TextField value={firstFormValues?.productName ?? ''} variant='outlined' disabled label='Ürün Adı' />
    //     <Typography variant="h6">Form Önizlemesi</Typography>
    //     <Typography>{`Ürün Adı: ${firstFormValues?.productName}`}</Typography>
    //     <Typography>{`Ürün Kategorisi: ${firstFormValues?.productCategory}`}</Typography>
    //     <Typography>{`Teslimat Yöntemi: ${thirdFormValues?.deliveryMethod}`}</Typography>
    //     <Typography>{`İade Politikası: ${fourthFormValues?.returnPolicy}`}</Typography>
    // </Grid>
);

const mapStateToProps = (state: any): StateProps => ({
    firstFormValues: state.form.firstForm?.values,
    secondFormValues: state.form.secondForm?.values,
    thirdFormValues: state.form.thirdForm?.values,
    fourthFormValues: state.form.fourthForm?.values,
});

export default connect(mapStateToProps)(FinishStepForm);


