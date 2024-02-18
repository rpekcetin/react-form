import * as React from 'react';
import FirstStepForm from '../../components/Steps/FirstStep/FirstStepForm';
import SecondStepForm from '../../components/Steps/SecondStep/SecondStepForm';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ThirdStepForm from '../../components/Steps/ThirdStep/ThirdStepForm';
import { CssBaseline, Grid, Paper, ThemeProvider, createTheme } from '@mui/material';
import FourthStepForm from "../../components/Steps/FourthStep/FourthStepForm"
import FinishStepForm from '../../components/Steps/FinishStep/FinishStepForm';
import { useDispatch } from 'react-redux';
import { reset } from 'redux-form';
import { StepTypes } from './types/types';

const Home = () => {
  const defaultTheme = createTheme();
  const dispatch = useDispatch()
  const [activeStep, setActiveStep] = React.useState<number>(0);
  const [finished, setFinished] = React.useState<boolean>(false);

  const handleNext = () => {
    setActiveStep((prevActiveStep: number) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep: number) => prevActiveStep - 1);
  };

  const handleReset = () => {
    dispatch(reset('firstForm'))
    dispatch(reset('secondForm'))
    dispatch(reset('thirdForm'))
    dispatch(reset('fourthForm'))
    dispatch(reset('finalForm'))
    setActiveStep(0);
    setFinished(false)
  };

  React.useEffect(() => {
    if (activeStep === steps.length) {
      setFinished(true)
    }
  }, [activeStep])

  const steps: StepTypes[] = [
    {
      value: 1,
      component: <FirstStepForm finished={finished} activeStep={activeStep} setActiveStep={setActiveStep} handleNext={handleNext} handleBack={handleBack} />
    },
    {
      value: 2,
      component: <SecondStepForm finished={finished} activeStep={activeStep} handleNext={handleNext} handleBack={handleBack} />
    },
    {
      value: 3,
      component: <ThirdStepForm finished={finished} activeStep={activeStep} setActiveStep={setActiveStep} handleNext={handleNext} handleBack={handleBack} />
    },
    {
      value: 4,
      component: <FourthStepForm finished={finished} activeStep={activeStep} setActiveStep={setActiveStep} handleNext={handleNext} handleBack={handleBack} />
    },
    {
      value: 5,
      component: <FinishStepForm finished={finished} activeStep={activeStep} setActiveStep={setActiveStep} handleNext={handleNext} handleBack={handleBack} />
    }
  ];

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Grid container component="main" sx={{ height: '100vh' }}>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage: 'url(./image/blake.webp)',
              backgroundRepeat: 'no-repeat',
              backgroundColor: (t) =>
                t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Box sx={{ width: '100%', marginTop: '50px' }}>
                <Stepper activeStep={activeStep}>
                  {steps.map((step) => {
                    const stepProps: { completed?: boolean } = {};
                    const labelProps: {
                      optional?: React.ReactNode;
                    } = {};
                    return (
                      <Step key={step.value} {...stepProps}>
                        <StepLabel {...labelProps} />
                      </Step>
                    );
                  })}
                </Stepper>
                {finished ? (
                  <React.Fragment>
                    <Grid textAlign={'center'} px={5} py={12} mt={1} >
                      <Typography sx={{ mt: 2, mb: 1 }}>
                        Ürün Başarıyla Eklendi
                      </Typography>
                      <Box mt={10} sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Box sx={{ flex: '1 1 auto' }} />
                        <Button variant='contained' onClick={handleReset}>Tekrarla</Button>
                      </Box>
                    </Grid>
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    {
                      steps?.filter((el: StepTypes) => el.value === activeStep + 1).map((data: StepTypes, index) => (
                        <Box key={index}>
                          {data.component}
                        </Box>
                      ))
                    }
                  </React.Fragment>
                )}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
}

export default Home