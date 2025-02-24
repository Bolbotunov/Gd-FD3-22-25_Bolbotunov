import { configureStore } from "@reduxjs/toolkit";
import { notesSlice } from "../notesSlice";
import { extraSlice } from "../extraSlice";

export type CompleteNumsType = [number, boolean][];

type TypeExtraCounter = {
    count: number,
}

export type TypeStore = {
    num: number,
    isOdd: boolean,
    completeNums: CompleteNumsType,
}

export type TypeNoteSlice = {
    notesSlice: TypeStore,
    extraSlice: TypeExtraCounter,
}

export const actions = {
    notesSlice: notesSlice.actions,
    extraSlice: extraSlice.actions,
}


export const store = configureStore( {
    reducer: {
       notesSlice: notesSlice.reducer,
       extraSlice: extraSlice.reducer,
    }
})

