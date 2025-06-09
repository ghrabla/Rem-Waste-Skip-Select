// src/redux/skipSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchSkipsByLocation = createAsyncThunk(
  'skips/fetchByLocation',
  async ({ postcode, area }, thunkAPI) => {
    try {
      const response = await axios.get(`https://app.wewantwaste.co.uk/api/skips/by-location`, {
        params: { postcode, area }
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

const skipSlice = createSlice({
  name: 'skips',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSkipsByLocation.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSkipsByLocation.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchSkipsByLocation.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default skipSlice.reducer;
