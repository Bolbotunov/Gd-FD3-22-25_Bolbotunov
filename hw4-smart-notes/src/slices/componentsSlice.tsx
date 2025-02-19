import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { v4 } from "uuid";

export type NoteType = {
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
  filterList: string;
}


type FilterPayload = PayloadAction<{search:string}>

const initialState: NoteStateType = {
  notes: [
    {
      id:  v4().slice(0, 4),
      tagId: null,
      title: 'список покупок 1',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. \
      Quidem earum magnam asperiores. Dolores blanditiis nesciunt officia, \
      ab magni eos nihil temporibus, ea cupiditate esse eius iure adipisci? \
      Reiciendis, iure est temporibus, ea cupiditate esse eius iure adipisci?.',
      created: new Date(),
    },
    {
      id:  v4().slice(0, 4),
      tagId: null,
      title: 'план обучения 1',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. \
      Quidem earum magnam asperiores. Dolores blanditiis nesciunt officia, \
      ab magni eos nihil temporibus, ea cupiditate esse eius iure adipisci? \
      Reiciendis, iure est temporibus, ea cupiditate esse eius iure adipisci?.\
      Lorem ipsum dolor sit amet consectetur adipisicing elit. \
      Quidem earum magnam asperiores. Dolores blanditiis nesciunt officia, \
      ab magni eos nihil temporibus, ea cupiditate esse eius iure adipisci? \
      Reiciendis, iure est temporibus, ea cupiditate esse eius iure adipisci?.',
      created: new Date(),
    },
    {
      id:  v4().slice(0, 4),
      tagId: null,
      title: 'план по работе 1',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      created: new Date(),
    },
    {
      id:  v4().slice(0, 4),
      tagId: null,
      title: 'список покупок 2',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. \
      Quidem earum magnam asperiores. Dolores blanditiis nesciunt officia, \
      ab magni eos nihil temporibus, ea cupiditate esse eius iure adipisci? \
      Reiciendis, iure est temporibus, ea cupiditate esse eius iure adipisci?.',
      created: new Date(),
    },
    {
      id:  v4().slice(0, 4),
      tagId: null,
      title: 'план обучения 2',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. \
      Quidem earum magnam asperiores. Dolores blanditiis nesciunt officia, \
      ab magni eos nihil temporibus, ea cupiditate esse eius iure adipisci? \
      Reiciendis, iure est temporibus, ea cupiditate esse eius iure adipisci?.\
      Lorem ipsum dolor sit amet consectetur adipisicing elit. \
      Quidem earum magnam asperiores. Dolores blanditiis nesciunt officia, \
      ab magni eos nihil temporibus, ea cupiditate esse eius iure adipisci? \
      Reiciendis, iure est temporibus, ea cupiditate esse eius iure adipisci?.',
      created: new Date(),
    },
    {
      id:  v4().slice(0, 4),
      tagId: null,
      title: 'план по работе 2',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      created: new Date(),
    },
    {
      id:  v4().slice(0, 4),
      tagId: null,
      title: 'список покупок 3',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. \
      Quidem earum magnam asperiores. Dolores blanditiis nesciunt officia, \
      ab magni eos nihil temporibus, ea cupiditate esse eius iure adipisci? \
      Reiciendis, iure est temporibus, ea cupiditate esse eius iure adipisci?.',
      created: new Date(),
    },
    {
      id:  v4().slice(0, 4),
      tagId: null,
      title: 'план обучения 3',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. \
      Quidem earum magnam asperiores. Dolores blanditiis nesciunt officia, \
      ab magni eos nihil temporibus, ea cupiditate esse eius iure adipisci? \
      Reiciendis, iure est temporibus, ea cupiditate esse eius iure adipisci?.\
      Lorem ipsum dolor sit amet consectetur adipisicing elit. \
      Quidem earum magnam asperiores. Dolores blanditiis nesciunt officia, \
      ab magni eos nihil temporibus, ea cupiditate esse eius iure adipisci? \
      Reiciendis, iure est temporibus, ea cupiditate esse eius iure adipisci?.',
      created: new Date(),
    },
    {
      id:  v4().slice(0, 4),
      tagId: null,
      title: 'план по работе 3',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      created: new Date(),
    },
    {
      id:  v4().slice(0, 4),
      tagId: null,
      title: 'план по работе 4',
      text: 'Lorem ipsum dolor adipisicing elit.',
      created: new Date(),
    }
  ],
  showNotes: false,
  filterList:'',
};

export const componentsSlice = createSlice({
  name: 'components',
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<NoteType>) => {
        state.notes.push(action.payload)
    },
    deleteNote: (state, action: PayloadAction<string>) => {
      state.notes = state.notes.filter(item => item.id !== action.payload)
    },
    editNote: (state, action: PayloadAction<NoteType>) => {
        const index = state.notes.findIndex((item) => item.id === action.payload.id);
        if (index !== -1) {
          state.notes[index] = action.payload;
        }
    },
    setFilter: (state, action: PayloadAction<string>) => {
      state.filterList = action.payload;
    },
  }
});


export const { addNote, deleteNote, editNote, setFilter } = componentsSlice.actions;
export default componentsSlice.reducer;
