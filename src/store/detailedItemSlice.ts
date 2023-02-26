import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { ResStatus } from '../types/common.types';
import {
  DetailedData,
  ResDetailedData,
} from '../types/detailed-response.types';

const API_KEY = import.meta.env.VITE_APP_API_KEY;

export const getDetailedItemData = createAsyncThunk<
  DetailedData,
  { id: string },
  { rejectValue: string }
>('detailed-item/getData', async function ({ id }, { rejectWithValue }) {
  const urlSearchParams = new URLSearchParams({
    apikey: API_KEY,
    i: id,
  });

  const res = await fetch('https://www.omdbapi.com/?' + urlSearchParams);

  if (!res.ok) {
    return rejectWithValue('Server Error');
  }

  const data: ResDetailedData = await res.json();

  if (data.Response === ResStatus.FALSE) {
    return rejectWithValue(data.Error);
  }

  return data;
});

interface DetailedItemState {
  data: DetailedData | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: DetailedItemState = {
  data: null,
  isLoading: false,
  error: null,
};

const detailedItemSlice = createSlice({
  name: 'detailed-item',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getDetailedItemData.pending, (state) => {
        state.data = null;
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getDetailedItemData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = false;
      })
      .addCase(getDetailedItemData.rejected, (state, action) => {
        state.isLoading = false;
        if (action.payload) {
          state.error = action.payload;
        }
      });
  },
});

export default detailedItemSlice.reducer;
