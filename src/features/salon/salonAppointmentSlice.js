import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../services/api';

export const bookSalonAppointment = createAsyncThunk(
  'salon/bookAppointment',
  async (formData, { rejectWithValue }) => {
    try {
      const res = await api.post('/salon_book_appointment', formData);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const salonAppointmentSlice = createSlice({
  name: 'salonAppointment',
  initialState: {
    loading: false,
    data: null,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(bookSalonAppointment.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(bookSalonAppointment.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(bookSalonAppointment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default salonAppointmentSlice.reducer;
