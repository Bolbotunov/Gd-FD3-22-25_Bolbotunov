import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { v4 } from "uuid";
import { initialTagsState } from "./TagsData";
import { TagType } from "./TagsData";


export const tagsSlice = createSlice({
    name: 'tags',
    initialState: initialTagsState,
    reducers: {
        addTag(state, action: PayloadAction<string>) {
            state.push({id: v4().slice(0, 4), title: action.payload, count: 0})
        }
    }
  });

  export const { addTag } = tagsSlice.actions;
  export default tagsSlice.reducer;