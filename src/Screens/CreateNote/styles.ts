import {StyleSheet} from 'react-native';

const saveNoteStyle = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
  title: {
    marginTop: 16,
  },
  description: {
    marginTop: 8,

    flexGrow: 1,
  },
  wrapperSaveNote: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  saveButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginTop: 8,
  },
});

export default saveNoteStyle;
