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

// Detail blog API thunk
export const fetchSalonBlogDetail = createAsyncThunk(
  'salon/fetchBlogDetail',
  async (slug, { rejectWithValue }) => {
    try {
      const res = await api.post('/salon_blog_detail', { url: slug });
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);


const salonBlogSlice = createSlice({
  name: 'salonBlog',
  initialState: {
    loading: false,
    apiblogs: [],
    error: null,

    // ✅ Detail blog state
    blogDetail: null,
    detailLoading: false,
    detailError: null,
  },
  extraReducers: builder => {
    builder
      // List
      .addCase(fetchSalonBlogs.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSalonBlogs.fulfilled, (state, action) => {
        state.loading = false;
        state.apiblogs = action.payload.data;
      })
      .addCase(fetchSalonBlogs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // ✅ Detail
      .addCase(fetchSalonBlogDetail.pending, state => {
        state.detailLoading = true;
        state.detailError = null;
        state.blogDetail = null;
      })
      .addCase(fetchSalonBlogDetail.fulfilled, (state, action) => {
        state.detailLoading = false;
        state.blogDetail = action.payload.data;
      })
      .addCase(fetchSalonBlogDetail.rejected, (state, action) => {
        state.detailLoading = false;
        state.detailError = action.payload;
      });
  },
});


export default salonBlogSlice.reducer;
