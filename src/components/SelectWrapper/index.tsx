// SelectWrapper.tsx
/*react/no-children-prop */
import React, { ReactNode } from 'react';
import { FormControl, InputLabel, Select, FormHelperText, MenuItem } from '@mui/material';
import { WrappedFieldProps } from 'redux-form';
import { Category } from '../FirstStep/types/types';

interface SelectWrapperProps extends WrappedFieldProps {
  label: string;
  categories?: Category[]
}

const SelectWrapper: React.FC<SelectWrapperProps> = ({
  input,
  label,
  categories,
  meta: { touched, error },
  ...custom
}) => (
  <FormControl variant='outlined' error={touched && !!error} fullWidth>
    <InputLabel id="demo-simple-select-standard-label">{label}</InputLabel>
    <Select labelId="demo-simple-select-standard-label"
      id="demo-simple-select-standard" {...input} {...custom} variant='outlined' value={input.value}>
      <MenuItem value="">
        Seçiniz...
      </MenuItem>
      {categories?.map((category: Category) => (
        <MenuItem value={category.value} key={category.value}>
          {category.label}
        </MenuItem>
      ))}
    </Select>
    {touched && error && <FormHelperText>{error}</FormHelperText>}
  </FormControl>
);

export default SelectWrapper;
