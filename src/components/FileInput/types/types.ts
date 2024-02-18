import { WrappedFieldProps } from "redux-form";

export interface FileMeta {
    name: string;
    size: number;
    preview: string;
}
export interface FileInputProps extends WrappedFieldProps {
    label: string;
    isRead?: boolean
}