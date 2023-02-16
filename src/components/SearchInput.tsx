import { Close as CloseIcon } from '@mui/icons-material';
import {
  FormControl,
  FormControlProps,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@mui/material';
import { Dispatch, SetStateAction, useRef } from 'react';

interface SearchInputProps extends FormControlProps {
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
}

function SearchInput({
  searchValue,
  setSearchValue,
  ...props
}: SearchInputProps) {
  const searchInputRef = useRef<HTMLDivElement>(null);

  return (
    <FormControl variant='outlined' {...props}>
      <InputLabel htmlFor='search-movies-form'>Search</InputLabel>
      <OutlinedInput
        ref={searchInputRef}
        id='search-movies-form'
        type='text'
        value={searchValue}
        label='Search'
        onChange={(e) => {
          const value = e.target.value;
          setSearchValue(value);
        }}
        endAdornment={
          searchValue && (
            <InputAdornment position='end'>
              <IconButton
                aria-label='clear search movie title'
                edge='end'
                onClick={() => {
                  setSearchValue('');
                  searchInputRef.current?.querySelector('input')?.focus();
                }}
              >
                <CloseIcon />
              </IconButton>
            </InputAdornment>
          )
        }
      />
    </FormControl>
  );
}

export { SearchInput };
