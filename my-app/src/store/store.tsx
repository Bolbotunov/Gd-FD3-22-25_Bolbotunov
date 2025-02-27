import { TypedUseSelectorHook, useSelector } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./toDoSlice";
import messageSliceReducer from "./messageSlice";
import nameSlice from "./nameSlice";
import todosSlice from "./toDoSlice";
import postSlice from "./postSlice";


export const action = {

    // messageSlice
    nameSlice: nameSlice.actions,
    todosSlice: todosSlice.actions,
    postSlice: postSlice.actions
    //dispatch(action.nameSlice.input({ name, lastName })); в InputComponent используется теперь так
}

export const store = configureStore({
    reducer: {
        //1
        messageSlice: messageSliceReducer,

        //2 
        nameSlice: nameSlice.reducer,
        todosSlice: todosSlice.reducer,
        postSlice: postSlice.reducer,
    }
});


export type ReduxStore = ReturnType<typeof store.getState>;
export const useTypedSelector: TypedUseSelectorHook<ReduxStore> = useSelector;