import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../services/api';

export const clinicContactUs = createAsyncThunk(
  'clinic/contactUs',
  async (formData, { rejectWithValue }) => {
    try {
      const res = await api.post('/clinic_contact', formData);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const clinicContactSlice = createSlice({
  name: 'clinicContact',
  initialState: {
    loading: false,
    message: null,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(clinicContactUs.pending, state => {
        state.loading = true;
      })
      .addCase(clinicContactUs.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload;
      })
      .addCase(clinicContactUs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default clinicContactSlice.reducer;
