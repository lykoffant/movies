import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

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
  { searchValue: string; searchType: SearchType; page?: number },
  { rejectValue: string }
>(
  'found-list/searchItems',
  async function ({ searchValue, searchType, page }, { rejectWithValue }) {
    const searchTypeParam =
      searchType !== SearchType.ALL ? `&type=${searchType}` : '';

    const pageParam = page ? `&page=${page}` : '';

    const res = await fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchValue}${searchTypeParam}${pageParam}`,
    );

    if (!res.ok) {
      return rejectWithValue('Server Error');
    }

    const data: ResData = await res.json();

    if (data.Response === ResStatus.FALSE) {
      return rejectWithValue(data.Error);
    }

    return data;
  },
);

interface FoundListState {
  list: FoundItemShortData[];
  totalPage: number;
  isLoading: boolean;
  error: string | null;
}

const initialState: FoundListState = {
  list: [],
  totalPage: 1,
  isLoading: false,
  error: null,
};

const foundListSlice = createSlice({
  name: 'found-list',
  initialState,
  reducers: {},
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

export default foundListSlice.reducer;
