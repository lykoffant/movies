import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { INITIAL_PAGE_NUMBER } from '../constants/pagination.constants';
import {
  FoundData,
  FoundItemShortData,
  ResData,
  ResStatus,
  SearchType,
} from '../types/data.types';

const API_KEY = import.meta.env.VITE_APP_API_KEY;

export const searchItems = createAsyncThunk<
  FoundData,
  { searchValue: string; searchType: SearchType; page: number },
  { rejectValue: string }
>(
  'found-list/searchItems',
  async function (
    { searchValue, searchType, page },
    { rejectWithValue, dispatch },
  ) {
    dispatch(setPage({ page }));

    const urlSearchParams = new URLSearchParams({
      apikey: API_KEY,
      s: searchValue,
      page: String(page),
    });

    if (searchType !== SearchType.ALL) {
      urlSearchParams.set('type', searchType);
    }

    const res = await fetch('https://www.omdbapi.com/?' + urlSearchParams);

    if (!res.ok) {
      return rejectWithValue('Server Error');
    }

    const data: ResData = await res.json();

    if (data.Response === ResStatus.FALSE) {
      return rejectWithValue(data.Error);
    }

    const dataWithPage = { ...data, page };

    return dataWithPage;
  },
);

interface FoundListState {
  list: FoundItemShortData[];
  page: number;
  totalPage: number;
  isLoading: boolean;
  error: string | null;
}

const initialState: FoundListState = {
  list: [],
  page: INITIAL_PAGE_NUMBER,
  totalPage: 1,
  isLoading: false,
  error: null,
};

const foundListSlice = createSlice({
  name: 'found-list',
  initialState,
  reducers: {
    setPage(state, action) {
      state.page = action.payload.page;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchItems.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(searchItems.fulfilled, (state, action) => {
        state.list = action.payload.Search;
        state.totalPage = Math.ceil(action.payload.totalResults / 10);
        state.isLoading = false;
      })
      .addCase(searchItems.rejected, (state, action) => {
        state.list = [];
        state.isLoading = false;
        if (action.payload) {
          state.error = action.payload;
        }
      });
  },
});

const { setPage } = foundListSlice.actions;

export default foundListSlice.reducer;
