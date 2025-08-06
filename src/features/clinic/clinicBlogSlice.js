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

// Detail blog API thunk
export const fetchClinicBlogDetail = createAsyncThunk(
  'clinic/fetchBlogDetail',
  async (slug, { rejectWithValue }) => {
    try {
      const res = await api.post('/clinic_blog_detail', { url: slug });
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);


const clinicBlogSlice = createSlice({
  name: 'clinicBlog',
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
      .addCase(fetchClinicBlogs.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchClinicBlogs.fulfilled, (state, action) => {
        state.loading = false;
        state.apiblogs = action.payload.data;
      })
      .addCase(fetchClinicBlogs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // ✅ Detail
      .addCase(fetchClinicBlogDetail.pending, state => {
        state.detailLoading = true;
        state.detailError = null;
        state.blogDetail = null;
      })
      .addCase(fetchClinicBlogDetail.fulfilled, (state, action) => {
        state.detailLoading = false;
        state.blogDetail = action.payload.data;
      })
      .addCase(fetchClinicBlogDetail.rejected, (state, action) => {
        state.detailLoading = false;
        state.detailError = action.payload;
      });
  },
});


export default clinicBlogSlice.reducer;
