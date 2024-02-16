import React from 'react';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';
import { Box, Button } from '@mui/material';
import FileInput from '../FileInput/FileInput';

// Form verisi için tip tanımı
interface ProductImagesFormData {
    productImages: File[];
}

// Formun kendi props'ları için tip tanımı
interface OwnProps {
    activeStep: number;
    setActiveStep: React.Dispatch<React.SetStateAction<number>>;
    handleBack: () => void;
    handleNext: () => void;
    finished: boolean;
}

// Redux Form ve kendi props'larımızı birleştiriyoruz
type Props = OwnProps & InjectedFormProps<ProductImagesFormData, OwnProps>;

const ThirdStepForm: React.FC<Props> = ({
    handleSubmit, // Redux Form'dan gelen handleSubmit fonksiyonu
    handleNext,
    finished,
    handleBack,
    activeStep,
}) => (
    <form onSubmit={handleSubmit(handleNext)}>
        <Field
            name="productImages"
            component={FileInput}
            label="Ürün Resimleri Yükle"
        />
        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button type="submit">
                {finished ? 'Bitir' : 'İleri'}
            </Button>
        </Box>
    </form>
);

export default reduxForm<ProductImagesFormData, OwnProps>({
    form: 'productImagesForm', // Formun benzersiz adı
    destroyOnUnmount: false,
})(ThirdStepForm);
