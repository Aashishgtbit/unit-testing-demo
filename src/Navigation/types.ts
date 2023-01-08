export enum Routes {
  HomeScreen = 'HomeScreen',
  CreateNoteScreen = 'CreateNoteScreen',
}

export type AppStackParamListType = {
  [Routes.HomeScreen]: undefined;
  [Routes.CreateNoteScreen]: undefined;
};
