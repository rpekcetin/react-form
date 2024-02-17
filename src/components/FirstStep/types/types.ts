import { InjectedFormProps } from "redux-form";

export interface Category {
    value: string;
    label: string;
}

export interface ProductInfoFormData {
    productName: string;
    productCategory: string;
    productDetails: string;
    productInsurance?: string;
}

export interface OwnProps {
    productCategory: string,
    activeStep: number
    setActiveStep: React.Dispatch<React.SetStateAction<number>>
    handleBack: () => void
    handleNext: () => void
    finished: boolean
    isRead?: boolean
}

export type Props = OwnProps & InjectedFormProps<ProductInfoFormData, OwnProps>;
