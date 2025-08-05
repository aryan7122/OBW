import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../services/api';

export const salonContactUs = createAsyncThunk(
  'salon/contactUs',
  async (formData, { rejectWithValue }) => {
    try {
      const res = await api.post('/salon_contact', formData);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const salonContactSlice = createSlice({
  name: 'salonContact',
  initialState: {
    loading: false,
    message: null,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(salonContactUs.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(salonContactUs.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload;
      })
      .addCase(salonContactUs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default salonContactSlice.reducer;
