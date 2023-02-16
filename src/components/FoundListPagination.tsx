import { Pagination, PaginationProps } from '@mui/material';
import { ChangeEvent, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { useAppDispatch } from '../hooks/useAppDispatch';
import { useAppSelector } from '../hooks/useAppSelector';
import { searchItems } from '../store/foundListSlice';
import { SearchType } from '../types/data.types';

function FoundListPagination(props: PaginationProps) {
  const dispatch = useAppDispatch();
  const totalPage = useAppSelector((state) => state.foundList.totalPage);
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState<number>(
    Number(searchParams.get('page')) || 1,
  );

  const handleChange = (_: ChangeEvent<unknown>, value: number) => {
    setPage(value);

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
