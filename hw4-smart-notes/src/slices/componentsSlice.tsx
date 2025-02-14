import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type NoteType = {
    id: number;
    title: string;
}

type NoteStateType = {
  notes: NoteType[];
  showNotes: boolean;
}


const initialState: NoteStateType = {
  notes: [],
  showNotes: false,
};

export const componentsSlice = createSlice({
  name: 'components',
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<NoteType>) => {
        state.notes.push(action.payload)
        console.log(JSON.parse(JSON.stringify(state)))
    },
    showNewNote: (state, action: PayloadAction<boolean>) => {
      state.showNotes = action.payload
    }
  },
});

export const { addNote, showNewNote } = componentsSlice.actions;
export default componentsSlice.reducer;
