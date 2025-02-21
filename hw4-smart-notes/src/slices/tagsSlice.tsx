import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { TagType } from "./TagsData";
import { v4 } from "uuid";


export const initialTagsState: TagType[] = [
    { id: v4(), title: 'work', count: 1, toEdit: false },
    { id: v4(), title: 'shop', count: 1, toEdit: false },
    { id: v4(), title: 'health', count: 1, toEdit: false },
  ];

export const tagsSlice = createSlice({
    name: 'tags',
    initialState: initialTagsState,
    reducers: {
        addTag(state, action: PayloadAction<TagType>) {
            state.push(action.payload)
        },
        editTag: (state, action: PayloadAction<TagType>) => {
            const index = state.findIndex((item: any) => item.id === action.payload.id);
            if (index !== -1) {
              state[index] = action.payload;
            }
        },
        deleteTag: (state, action: PayloadAction<string>) => {
          return state.filter(item => item.id !== action.payload)
        },
        setTags: (state, action) => {
          return action.payload;
        },
        addNumCounter: (state, action) => {
          const tag = state.find(tag => tag.id === action.payload);
          if (tag) {
            tag.count += 1;
          }
        },
    }
  });

  export const { addTag, editTag, deleteTag, setTags, addNumCounter } = tagsSlice.actions;
  export default tagsSlice.reducer;