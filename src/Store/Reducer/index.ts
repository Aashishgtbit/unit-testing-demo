import {combineReducers} from '@reduxjs/toolkit';
import notes from './Notes/slice';
const rootReducer = combineReducers({
  notes: notes,
});

export default rootReducer;
