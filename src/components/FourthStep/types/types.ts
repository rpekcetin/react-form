import { InjectedFormProps } from "redux-form";

export interface DeliveryFormData {
    deliveryMethod: string;
    shippingFee?: number;
    shippingCompany?: string
    deliveryAddress: string
    returnOption: string;
}

export interface OwnProps {
    activeStep: number;
    setActiveStep: React.Dispatch<React.SetStateAction<number>>;
    handleBack: () => void;
    handleNext: () => void;
    finished: boolean;
    deliveryMethod?: string
    returnOption?: string
    isRead?: boolean
}

export type Props = OwnProps & InjectedFormProps<DeliveryFormData, OwnProps>;