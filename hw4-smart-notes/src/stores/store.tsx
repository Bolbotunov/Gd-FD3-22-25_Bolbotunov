import { configureStore } from '@reduxjs/toolkit';
import { componentsSlice } from '../slices/componentsSlice';
import { tagsSlice } from '../slices/tagsSlice';
import { loadState, saveState } from '../styles/utils/localStorage';

const savedState = loadState();
export const actions = {
  componentsSlice: componentsSlice.actions,
};

const store = configureStore({
  reducer: {
    componentsSlice: componentsSlice.reducer,
    tagsSlice: tagsSlice.reducer,
  },
  preloadedState: savedState,
});

store.subscribe(() => {
  const state = store.getState();
  const stateToSave = {
    componentsSlice: state.componentsSlice,
    tagsSlice: state.tagsSlice,
  };
  saveState(stateToSave);
});

export default store;
