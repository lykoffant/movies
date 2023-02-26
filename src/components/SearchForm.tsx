import { Search as SearchIcon } from '@mui/icons-material';
import { Box, Button } from '@mui/material';
import { useState, FormEvent } from 'react';
import { useSearchParams } from 'react-router-dom';

import { RadioButtonGroup } from './RadioButtonGroup';
import { SearchInput } from './SearchInput';

import { useAppDispatch } from '../hooks/useAppDispatch';
import { searchItems } from '../store/foundListSlice';
import { SearchType } from '../types/search-response.types';

function SearchForm() {
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchValue, setSearchValue] = useState<string>(
    searchParams.get('s') || '',
  );
  const [searchType, setSearchType] = useState<SearchType>(
    (searchParams.get('type') as SearchType) || SearchType.ALL,
  );

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setSearchParams((prevSearchParams) => {
      if (searchValue.trim()) {
        prevSearchParams.set('s', searchValue);
        prevSearchParams.delete('page');
      } else {
        prevSearchParams.delete('s');
      }

      prevSearchParams.set('type', searchType);

      return prevSearchParams;
    });

    dispatch(searchItems({ searchValue, searchType, page: 1 }));
  };

  return (
    <Box
      component='form'
      sx={{ mb: 4, display: 'flex', flexWrap: 'wrap' }}
      onSubmit={(e) => handleSubmit(e)}
    >
      <SearchInput
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        sx={{ mr: 1, flexGrow: 1 }}
      />

      <RadioButtonGroup
        id='type-radio-buttons-group-label'
        label='Type'
        name='type-radio-buttons-group'
        group={[
          { label: 'All', value: SearchType.ALL },
          { label: 'Movie', value: SearchType.MOVIE },
          { label: 'Series', value: SearchType.SERIES },
          { label: 'Game', value: SearchType.GAME },
        ]}
        searchType={searchType}
        setSearchType={setSearchType}
        sx={{ order: 3, width: '100%', mt: 2 }}
      />

      <Button variant='contained' type='submit'>
        <SearchIcon />
      </Button>
    </Box>
  );
}

export { SearchForm };
