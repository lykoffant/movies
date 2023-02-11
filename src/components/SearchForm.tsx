import { Search as SearchIcon, Close as CloseIcon } from '@mui/icons-material';
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Radio,
  RadioGroup,
} from '@mui/material';
import { useState, useRef, ChangeEvent } from 'react';

import { useAppDispatch } from '../hooks/useAppDispatch';
import { searchItems } from '../store/foundListSlice';
import { SearchType } from '../types/data.types';

function SearchForm() {
  const dispatch = useAppDispatch();

  const [searchValue, setSearchValue] = useState<string>('');
  const searchInputRef = useRef<HTMLDivElement>(null);

  const [searchType, setSearchType] = useState<SearchType>(SearchType.ALL);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchType(event.target.value as SearchType);
  };

  return (
    <Box
      component='form'
      sx={{ mb: 4, display: 'flex', flexWrap: 'wrap' }}
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(searchItems({ searchValue, searchType }));
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

      <FormControl sx={{ order: 3, width: '100%', mt: 2 }}>
        <FormLabel id='type-radio-buttons-group-label'>Type</FormLabel>
        <RadioGroup
          row
          aria-labelledby='type-radio-buttons-group-label'
          name='type-radio-buttons-group'
          value={searchType}
          onChange={handleChange}
        >
          <FormControlLabel
            value={SearchType.ALL}
            control={<Radio />}
            label='All'
          />
          <FormControlLabel
            value={SearchType.MOVIE}
            control={<Radio />}
            label='Movie'
          />
          <FormControlLabel
            value={SearchType.SERIES}
            control={<Radio />}
            label='Series'
          />
          <FormControlLabel
            value={SearchType.GAME}
            control={<Radio />}
            label='Game'
          />
        </RadioGroup>
      </FormControl>

      <Button variant='contained' type='submit'>
        <SearchIcon />
      </Button>
    </Box>
  );
}

export { SearchForm };
