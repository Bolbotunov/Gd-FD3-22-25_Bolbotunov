import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { v4 } from "uuid";

type NoteType = {
    id: string;
    tagId: string | null;
    title: string;
    text: string;
    created: Date;
    // updated: Date;
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
    },
    deleteNote: (state, action: PayloadAction<string>) => {
      state.notes = state.notes.filter(item => item.title !== action.payload)
    },
    editNote: (state, action: PayloadAction<NoteType>) => {
      const num = state.notes.findIndex((item) => item.id === action.payload.id)
      if (num !== -1) {
        state.notes[num] = action.payload
      }
    },
  }
});


export const { addNote, showNewNote, deleteNote, editNote } = componentsSlice.actions;
export default componentsSlice.reducer;
