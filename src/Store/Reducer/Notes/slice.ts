import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {INotesState} from './types';
import {INotes} from '../../../Types/notes';

const initialState: INotesState = {
  data: [],
};

const noteSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    createNote(state: INotesState, action: PayloadAction<INotes>) {
      state.data.push(action.payload);
    },
  },
});

export const {createNote} = noteSlice.actions;
export default noteSlice.reducer;
