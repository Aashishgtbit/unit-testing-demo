import React from 'react';
import {Text, View} from 'native-base';
import {StyleProp, ViewStyle} from 'react-native';

import {colors} from '../../Styles/colors';
import notesItemStyle from './styles';

interface INotesItemProps {
  title: string;
  description: string;
  wrapperStyle?: StyleProp<ViewStyle>;
}
export const NotesItem: React.FC<INotesItemProps> = ({
  title,
  description,
  wrapperStyle,
}) => {
  return (
    <View
      style={[notesItemStyle.card, notesItemStyle.shadowProp, wrapperStyle]}>
      <View>
        <Text fontWeight={'bold'}>{title}</Text>
      </View>
      <View>
        <Text color={colors.descriptionColor}>{description}</Text>
      </View>
    </View>
  );
};
