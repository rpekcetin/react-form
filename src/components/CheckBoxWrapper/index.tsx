import React from 'react';
import { FormControlLabel, Checkbox, FormHelperText } from '@mui/material';
import { CustomCheckboxProps } from './types/types';

const CheckBoxWrapper: React.FC<CustomCheckboxProps> = ({
    input,
    label,
    meta: { touched, error }
}) => (
    <>
        <FormControlLabel
            control={
                <Checkbox
                    {...input}
                    checked={input.value ? true : false}
                    onChange={input.onChange}
                    color="primary"
                />
            }
            label={label}
        />
        {touched && error && <FormHelperText sx={{ marginTop: -1 }} error>{error}</FormHelperText>}
    </>
);

export default CheckBoxWrapper;
