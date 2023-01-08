import React from 'react';
import {View} from 'react-native';
import {SaveIcon} from '../../Assets/Icons';
import Button from '../../Components/Common/Button';
import saveNoteStyle from './styles';

interface SaveNoteButtonProps {
  onPress: () => void;
}
const SaveNoteButton: React.FC<SaveNoteButtonProps> = ({onPress}) => {
  return (
    <View style={saveNoteStyle.wrapperSaveNote}>
      <Button onPress={onPress} style={saveNoteStyle.saveButton}>
        <SaveIcon />
      </Button>
    </View>
  );
};

export default SaveNoteButton;
