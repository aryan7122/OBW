import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../services/api';

export const bookClinicAppointment = createAsyncThunk(
  'clinic/bookAppointment',
  async (formData, { rejectWithValue }) => {
    try {
      const res = await api.post('/clinic_book_appointment', formData);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const clinicAppointmentSlice = createSlice({
  name: 'clinicAppointment',
  initialState: {
    loading: false,
    data: null,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(bookClinicAppointment.pending, state => {
        state.loading = true;
      })
      .addCase(bookClinicAppointment.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(bookClinicAppointment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default clinicAppointmentSlice.reducer;
