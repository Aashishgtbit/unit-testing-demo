import {INotes} from '../Types/notes';

export enum Routes {
  HomeScreen = 'HomeScreen',
  CreateNoteScreen = 'CreateNoteScreen',
  UpdateNoteScreen = 'UpdateNoteScreen',
}

export type AppStackParamListType = {
  [Routes.HomeScreen]: undefined;
  [Routes.CreateNoteScreen]: undefined;
  [Routes.UpdateNoteScreen]: IUpdateNoteParams;
};

export interface IUpdateNoteParams {
  note: INotes;
}
