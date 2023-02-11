import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import {
  FoundItemShortData,
  ResData,
  ResStatus,
  SearchType,
} from '../types/data.types';

const API_KEY = import.meta.env.VITE_APP_API_KEY;

export const searchItems = createAsyncThunk<
  FoundItemShortData[],
  { searchValue: string; searchType: SearchType },
  { rejectValue: string }
>(
  'found-list/searchItems',
  async function ({ searchValue, searchType }, { rejectWithValue }) {
    const searchTypeParam =
      searchType !== SearchType.ALL ? `&type=${searchType}` : '';

    const res = await fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchValue}${searchTypeParam}`,
    );

    if (!res.ok) {
      return rejectWithValue('Server Error');
    }

    const data: ResData = await res.json();

    if (data.Response === ResStatus.FALSE) {
      return rejectWithValue(data.Error);
    }

    return data.Search;
  },
);

interface FoundListState {
  list: FoundItemShortData[];
  isLoading: boolean;
  error: string | null;
}

const initialState: FoundListState = {
  list: [],
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
        state.list = action.payload;
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
