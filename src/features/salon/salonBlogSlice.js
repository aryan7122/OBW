import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../services/api';

export const fetchSalonBlogs = createAsyncThunk(
  'salon/fetchBlogs',
  async (_, { rejectWithValue }) => {
    try {
      const res = await api.get('/salon_blogs');
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const salonBlogSlice = createSlice({
  name: 'salonBlog',
  initialState: {
    loading: false,
    blogs: [],
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchSalonBlogs.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSalonBlogs.fulfilled, (state, action) => {
        state.loading = false;
        state.blogs = action.payload;
      })
      .addCase(fetchSalonBlogs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default salonBlogSlice.reducer;
