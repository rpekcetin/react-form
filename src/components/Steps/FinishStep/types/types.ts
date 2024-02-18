import { InjectedFormProps } from "redux-form";

export interface OwnProps {
    activeStep: number;
    setActiveStep: React.Dispatch<React.SetStateAction<number>>;
    handleBack: () => void;
    handleNext: () => void;
    finished: boolean;
}
export interface FinishFormData {
    privacyPolicy: boolean
    isReaded: boolean
}

export type Props = OwnProps & InjectedFormProps<FinishFormData, OwnProps>;
