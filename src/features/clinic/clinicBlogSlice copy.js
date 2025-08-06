import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../services/api';

export const fetchClinicBlogs = createAsyncThunk(
  'clinic/fetchBlogs',
  async (_, { rejectWithValue }) => {
    try {
      const res = await api.get('/clinic_blogs');
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const clinicBlogSlice = createSlice({
  name: 'clinicBlog',
  initialState: {
    loading: false,
    blogs: [],
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchClinicBlogs.pending, state => {
        state.loading = true;
      })
      .addCase(fetchClinicBlogs.fulfilled, (state, action) => {
        state.loading = false;
        state.blogs = action.payload;
      })
      .addCase(fetchClinicBlogs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default clinicBlogSlice.reducer;
