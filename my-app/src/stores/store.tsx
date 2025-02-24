import { configureStore } from "@reduxjs/toolkit";
import { notesSlice } from "../notesSlice";

export type CompleteNumsType = [number, boolean][];
export type TypeStore = {
    num: number,
    isOdd: boolean,
    completeNums: CompleteNumsType,
}

export type TypeNoteSlice = {
    notesSlice: TypeStore,
}

export const actions = {
    notesSlice: notesSlice.actions,
}


export const store = configureStore( {
    reducer: {
       notesSlice: notesSlice.reducer,
    }
})

