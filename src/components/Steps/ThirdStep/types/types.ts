import { InjectedFormProps } from "redux-form";

export interface ProductImagesFormData {
    productImages: File[];
}

export interface OwnProps {
    activeStep: number;
    setActiveStep: React.Dispatch<React.SetStateAction<number>>;
    handleBack: () => void;
    handleNext: () => void;
    finished: boolean;
    isRead?: boolean
}

export type Props = OwnProps & InjectedFormProps<ProductImagesFormData, OwnProps>;
