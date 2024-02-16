import { TextField } from '@mui/material';
import React from 'react';
import { WrappedFieldProps } from 'redux-form';

const TextFieldWrapper: React.FC<WrappedFieldProps & { label: string, type: React.HTMLInputTypeAttribute }> = ({
    input,
    label,
    type,
    meta: { touched, error },
    ...custom
}) => (
    <TextField
        label={label}
        type={type}
        fullWidth
        variant='outlined'
        error={touched && !!error}
        helperText={touched && error}
        {...input}
        {...custom}
    />
);

export default TextFieldWrapper;
