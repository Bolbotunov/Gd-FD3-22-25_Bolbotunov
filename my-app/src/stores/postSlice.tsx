import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { JSONServerPost } from '../api/jsonServer';

type PostState = {
  posts: JSONServerPost[];
  selectedPost?: JSONServerPost | null;
}

const initialState: PostState = {
    posts: [],
    selectedPost: null,
};

const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
      init(state, action: PayloadAction<JSONServerPost[]>) {
        state.posts = action.payload;
      },
      addPost(state, action: PayloadAction<JSONServerPost>) {
        state.posts.push(action.payload);
      },
      editPost(state, action: PayloadAction<
        JSONServerPost>) {
          const postIndex = state.posts.findIndex(post => post.id === action.payload.id);
          if (postIndex !== -1) {
            state.posts[postIndex] = action.payload;
          }
      },
      initPost(state, action: PayloadAction<JSONServerPost>) {
        state.selectedPost = action.payload;
      },
      select(state, action: PayloadAction<JSONServerPost['id']>) {
        state.selectedPost = state.posts.find(post => post.id === action.payload);
      },

      unselect(state) {
        state.selectedPost = null;
      },

    },
  })


  export default postSlice;