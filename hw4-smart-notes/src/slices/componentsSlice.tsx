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


type FilterPayload = PayloadAction<{search:string}>

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
    },
    deleteNote: (state, action: PayloadAction<string>) => {
      state.notes = state.notes.filter(item => item.title !== action.payload)
    },
    editNote: (state, action: PayloadAction<NoteType>) => {
        const index = state.notes.findIndex((item) => item.id === action.payload.id);
        if (index !== -1) {
          state.notes[index] = action.payload;
        }
    },
    // filterNote: (state, action: FilterPayload) {
    //   if (!action.payload.search) {
    //     state.search = ''
    //     state.filteredTodos = state.todos
    //     return;
    //   }
    // }
  }
});


export const { addNote, deleteNote, editNote } = componentsSlice.actions;
export default componentsSlice.reducer;
