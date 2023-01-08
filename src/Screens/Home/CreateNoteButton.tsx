import React from 'react';
import {View} from 'react-native';
import {PlusIcon} from '../../Assets/Icons';
import Button from '../../Components/Common/Button';
import homeScreenStyle from './styles';
interface AddNoteButtonProps {
  onPress: () => void;
}
const AddNoteButton: React.FC<AddNoteButtonProps> = ({onPress}) => {
  return (
    <View style={homeScreenStyle.wrapperAddNote}>
      <Button onPress={onPress} style={homeScreenStyle.addButton}>
        <PlusIcon />
      </Button>
    </View>
  );
};

export default AddNoteButton;
