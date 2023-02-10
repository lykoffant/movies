import { Search as SearchIcon, Close as CloseIcon } from '@mui/icons-material';
import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@mui/material';
import { useState, useRef } from 'react';

import { useAppDispatch } from '../hooks/useAppDispatch';
import { searchItems } from '../store/foundListSlice';

function SearchForm() {
  const [searchValue, setSearchValue] = useState<string>('');
  const searchInputRef = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();

  return (
    <Box
      component='form'
      sx={{ mb: 4, display: 'flex' }}
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(searchItems(searchValue));
      }}
    >
      <FormControl sx={{ mr: 1, flexGrow: 1 }} variant='outlined'>
        <InputLabel htmlFor='search-movies-form'>Search</InputLabel>
        <OutlinedInput
          ref={searchInputRef}
          id='search-movies-form'
          type='text'
          value={searchValue}
          label='Search'
          onChange={(e) => setSearchValue(e.target.value)}
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

      <Button variant='contained' type='submit'>
        <SearchIcon />
      </Button>
    </Box>
  );
}

export { SearchForm };
