import { Box, Button, Grid } from '@mui/material'
import { ButtonProps } from './types/types'

const index: React.FC<ButtonProps> = ({ activeStep, handleBack, finished }) => {
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
                    Geri
                </Button>
                <Box sx={{ flex: '1 1 auto' }} />
                <Button type='submit' variant='outlined'>
                    {finished ? 'Bitir' : 'İleri'}
                </Button>
            </Box>
        </Grid>
    )
}

export default index