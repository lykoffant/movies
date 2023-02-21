import { CircularProgress, Container, Typography } from '@mui/material';
import { useEffect } from 'react';

import { useOutletContext, useSearchParams } from 'react-router-dom';

import { ErrorAlert } from '../components/ErrorAlert';

import { FoundList } from '../components/FoundList';
import { FoundListPagination } from '../components/FoundListPagination';

import { OutletContextType } from '../components/Layout';
import { SearchForm } from '../components/SearchForm';
import { INITIAL_PAGE_NUMBER } from '../constants/pagination.constants';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { useAppSelector } from '../hooks/useAppSelector';
import { searchItems } from '../store/foundListSlice';
import { SearchType } from '../types/data.types';

function SearchPage() {
  const dispatch = useAppDispatch();
  const { sx } = useOutletContext<OutletContextType>();
  const [searchParams] = useSearchParams();

  const totalPage = useAppSelector((state) => state.foundList.totalPage);
  const isLoading = useAppSelector((state) => state.foundList.isLoading);
  const error = useAppSelector((state) => state.foundList.error);

  useEffect(() => {
    const searchValue = searchParams.get('s');
    const searchType = searchParams.get('type') as SearchType;
    const page = Number(searchParams.get('page')) || INITIAL_PAGE_NUMBER;

    if (searchValue && searchType) {
      dispatch(
        searchItems({
          searchValue,
          searchType,
          page,
        }),
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container
      component='main'
      maxWidth='md'
      sx={{ ...sx, py: 4, display: 'flex', flexDirection: 'column' }}
    >
      <Typography variant='h1' className='visually-hidden'>
        Search
      </Typography>

      <SearchForm />

      {error && <ErrorAlert>{error}</ErrorAlert>}

      {isLoading ? <CircularProgress sx={{ m: 'auto' }} /> : <FoundList />}

      {totalPage > 1 && <FoundListPagination sx={{ mx: 'auto', mt: 4 }} />}
    </Container>
  );
}

export { SearchPage };
