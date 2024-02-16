import * as React from 'react';
import FirstStepForm from '../../components/FirstStep/FirstStepForm';
import SecondStepForm from '../../components/SecondStep/SecondStepForm';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ThirdStepForm from '../../components/ThirdStep/ThirdStepForm';
import { CssBaseline, Grid, Paper, ThemeProvider, createTheme } from '@mui/material';
import FourthStepForm from "../../components/FourthStep/FourthStepForm"
import FifthStepForm from "../../components/FifthStep/FifthStepForm"
import FinishStepForm from '../../components/FinishStep/FinishStepForm';

const Home = () => {
  const defaultTheme = createTheme();
  const [activeStep, setActiveStep] = React.useState<number>(3);
  const [finished, setFinished] = React.useState<boolean>(false);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
    setFinished(false)
  };

  React.useEffect(() => {
    if (activeStep === steps.length) {
      setFinished(true)
    }
  }, [activeStep])

  const steps = [
    {
      value: 1,
      component: <FirstStepForm finished={finished} activeStep={activeStep} setActiveStep={setActiveStep} handleNext={handleNext} handleBack={handleBack} />
    },
    {
      value: 2,
      component: <SecondStepForm finished={finished} activeStep={activeStep} setActiveStep={setActiveStep} handleNext={handleNext} handleBack={handleBack} />
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
      component: <FifthStepForm finished={finished} activeStep={activeStep} setActiveStep={setActiveStep} handleNext={handleNext} handleBack={handleBack} />
    },
    {
      value: 6,
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
              backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
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
              <Box sx={{ width: '100%', marginTop: '150px' }}>
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
                    <Typography sx={{ mt: 2, mb: 1 }}>
                      All steps completed - you&apos;re finished
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                      <Box sx={{ flex: '1 1 auto' }} />
                      <Button onClick={handleReset}>Reset</Button>
                    </Box>
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    {
                      steps?.filter((el: any) => el.value === activeStep + 1).map((data: any, index) => (
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