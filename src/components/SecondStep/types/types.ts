import { InjectedFormProps } from "redux-form";

export interface ProductPricingFormData {
    productPrice: number;
    productStock: number;
    productDiscount: number
}

export interface OwnProps {
    activeStep: number
    setActiveStep: React.Dispatch<React.SetStateAction<number>>
    handleBack: () => void
    handleNext: () => void
    finished: boolean
}

export type Props = OwnProps & InjectedFormProps<ProductPricingFormData, OwnProps>;
