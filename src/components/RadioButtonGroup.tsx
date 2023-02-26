import {
  FormControl,
  FormControlLabel,
  FormControlProps,
  FormLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import { ChangeEvent, Dispatch, SetStateAction } from 'react';

import { SearchType } from '../types/search-response.types';

interface GroupItem {
  label: string;
  value: SearchType;
}

interface RadioButtonGroupProps extends FormControlProps {
  id: string;
  label: string;
  name: string;
  group: GroupItem[];
  searchType: SearchType;
  setSearchType: Dispatch<SetStateAction<SearchType>>;
}

function RadioButtonGroup({
  id,
  label,
  name,
  group,
  searchType,
  setSearchType,
  ...props
}: RadioButtonGroupProps) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value as SearchType;
    setSearchType(value);
  };

  return (
    <FormControl {...props}>
      <FormLabel id={id}>{label}</FormLabel>
      <RadioGroup
        row
        aria-labelledby={id}
        name={name}
        value={searchType}
        onChange={handleChange}
      >
        {group.map(({ label, value }) => (
          <FormControlLabel
            key={value}
            label={label}
            value={value}
            control={<Radio />}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}

export { RadioButtonGroup };
