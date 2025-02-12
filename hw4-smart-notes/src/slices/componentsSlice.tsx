import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type NoteSectionType = {
    id: number;
    title: string;
}

type ComponentStateType = {
    title: string;
    notesSections: NoteSectionType[];
}


const initialState: ComponentStateType = {
  title: '',
  notesSections: [],
};

export const componentsSlice = createSlice({
  name: 'components',
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<string>) => {
        state.title = action.payload;
    },
    addNotesSection: (state, action: PayloadAction<string>) => {
        state.notesSections.push({ id: Date.now(), title: action.payload });
      },
  },
});

export const { addNote, addNotesSection } = componentsSlice.actions;
export default componentsSlice.reducer;
