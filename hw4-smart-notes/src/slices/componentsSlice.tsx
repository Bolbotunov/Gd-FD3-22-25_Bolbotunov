import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { useSelector } from "react-redux";
import { v4 } from "uuid";
import { TagType } from "./TagsData";
import { initialTagsState } from "./tagsSlice";

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
  filterWord: string;
  selectedTag: string;
}

function getRandomTagId(): string {
  const randomIndex = Math.floor(Math.random() * initialTagsState.length);
  return initialTagsState[randomIndex].title;
}



const initialState: NoteStateType = {
  notes: [
    {
      id:  v4().slice(0, 4),
      tagId: getRandomTagId(),
      title: 'список покупок 1',
      text: 'Text A Lorem ipsum dolor sit amet consectetur adipisicing elit. \
      Quidem earum magnam asperiores. Dolores blanditiis nesciunt officia, \
      ab magni eos nihil temporibus, ea cupiditate esse eius iure adipisci? \
      Reiciendis, iure est temporibus, ea cupiditate esse eius iure adipisci?.',
      created: new Date(),
    },
    {
      id:  v4().slice(0, 4),
      tagId:  getRandomTagId(),
      title: 'план обучения 1',
      text: 'Text B Lorem ipsum dolor sit amet consectetur adipisicing elit. \
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
      tagId:  getRandomTagId(),
      title: 'план по работе 1',
      text: 'Text C Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      created: new Date(),
    },
    {
      id:  v4().slice(0, 4),
      tagId:  getRandomTagId(),
      title: 'список покупок 2',
      text: 'Text D Lorem ipsum dolor sit amet consectetur adipisicing elit. \
      Quidem earum magnam asperiores. Dolores blanditiis nesciunt officia, \
      ab magni eos nihil temporibus, ea cupiditate esse eius iure adipisci? \
      Reiciendis, iure est temporibus, ea cupiditate esse eius iure adipisci?.',
      created: new Date(),
    },
    {
      id:  v4().slice(0, 4),
      tagId:  getRandomTagId(),
      title: 'план обучения 2',
      text: 'text E Lorem ipsum dolor sit amet consectetur adipisicing elit. \
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
      tagId:  getRandomTagId(),
      title: 'план по работе 2',
      text: 'text F Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      created: new Date(),
    },
    {
      id:  v4().slice(0, 4),
      tagId:  getRandomTagId(),
      title: 'список покупок 3',
      text: 'text G Lorem ipsum dolor sit amet consectetur adipisicing elit. \
      Quidem earum magnam asperiores. Dolores blanditiis nesciunt officia, \
      ab magni eos nihil temporibus, ea cupiditate esse eius iure adipisci? \
      Reiciendis, iure est temporibus, ea cupiditate esse eius iure adipisci?.',
      created: new Date(),
    },
    {
      id:  v4().slice(0, 4),
      tagId:  getRandomTagId(),
      title: 'план обучения 3',
      text: 'text H Lorem ipsum dolor sit amet consectetur adipisicing elit. \
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
      tagId:  getRandomTagId(),
      title: 'план по работе 3',
      text: 'text I Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      created: new Date(),
    },
    {
      id:  v4().slice(0, 4),
      tagId:  getRandomTagId(),
      title: 'план по работе 4',
      text: 'text K Lorem ipsum dolor adipisicing elit.',
      created: new Date(),
    }
  ],
  showNotes: false,
  filterWord:'',
  selectedTag:'',
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
      state.filterWord = action.payload;
    },
    choseSelectedTag: (state, action: PayloadAction<string>) => {
      state.selectedTag = action.payload;
    },
  }
});


export const { addNote, deleteNote, editNote, setFilter,choseSelectedTag } = componentsSlice.actions;
export default componentsSlice.reducer;
