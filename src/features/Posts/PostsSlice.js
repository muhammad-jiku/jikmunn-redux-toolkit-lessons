//  external imports
import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
  //   const res = await axios.get('https://jsonplaceholder.typicode.com/post'); // for displaying error purpose

  return res.data;
});

const postsSlice = createSlice({
  name: 'Posts',
  initialState: {
    isLoading: false,
    posts: [],
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.posts = action.payload;
      state.error = null;
    });
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.isLoading = false;
      state.posts = [];
      state.error = action.error.message;
    });
  },
});

// export const {} = postsSlice.actions;

export default postsSlice.reducer;
