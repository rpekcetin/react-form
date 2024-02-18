import { WrappedFieldProps } from "redux-form";
import { Category } from "../../Steps/FirstStep/types/types";

export interface SelectWrapperProps extends WrappedFieldProps {
    label: string;
    categories?: Category[]
}