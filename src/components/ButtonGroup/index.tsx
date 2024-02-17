import { Box, Button, Grid } from '@mui/material'

const index = ({ activeStep, handleBack, finished }: any) => {
    return (
        <Grid item xs={12} md={8} mt={6}>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                <Button
                    color="inherit"
                    variant='outlined'
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{ mr: 1 }}
                >
                    Back
                </Button>
                <Box sx={{ flex: '1 1 auto' }} />
                <Button type='submit' variant='outlined'>
                    {finished ? 'Finish' : 'Next'}
                </Button>
            </Box>
        </Grid>
    )
}

export default index