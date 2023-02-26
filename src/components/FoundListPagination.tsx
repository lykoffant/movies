import { Pagination, PaginationProps } from '@mui/material';
import { ChangeEvent } from 'react';
import { useSearchParams } from 'react-router-dom';

import { useAppDispatch } from '../hooks/useAppDispatch';
import { useAppSelector } from '../hooks/useAppSelector';
import { searchItems } from '../store/foundListSlice';
import { SearchType } from '../types/search-response.types';

function FoundListPagination(props: PaginationProps) {
  const dispatch = useAppDispatch();
  const page = useAppSelector((state) => state.foundList.page);
  const totalPage = useAppSelector((state) => state.foundList.totalPage);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = (_: ChangeEvent<unknown>, value: number) => {
    setSearchParams((prevSearchParams) => {
      prevSearchParams.set('page', String(value));

      return prevSearchParams;
    });

    const searchValue = searchParams.get('s');
    const searchType = searchParams.get('type') as SearchType;

    if (searchValue && searchType) {
      dispatch(
        searchItems({
          searchValue,
          searchType,
          page: value,
        }),
      );
    }
  };

  return (
    <Pagination
      count={totalPage}
      page={page}
      color='primary'
      size='large'
      onChange={handleChange}
      {...props}
    />
  );
}

export { FoundListPagination };
