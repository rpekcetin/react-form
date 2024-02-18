import { InjectedFormProps } from "redux-form";

export interface ProductPricingFormData {
    productPrice: number;
    productStock: number;
    productDiscount: number
}

export interface OwnProps {
    activeStep: number
    handleBack: () => void
    handleNext: () => void
    finished: boolean
    isRead?: boolean
}

export type Props = OwnProps & InjectedFormProps<ProductPricingFormData, OwnProps>;
