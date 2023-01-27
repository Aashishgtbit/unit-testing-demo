import React from 'react';
import {Text, View} from 'native-base';
import {Pressable, StyleProp, ViewStyle} from 'react-native';

import {colors} from '../../Styles/colors';
import notesItemStyle from './styles';

interface INotesItemProps {
  title: string;
  description: string;
  wrapperStyle?: StyleProp<ViewStyle>;
  onPress?: () => void;
}
export const NotesItem: React.FC<INotesItemProps> = ({
  title,
  description,
  wrapperStyle,
  onPress,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [
        notesItemStyle.card,
        notesItemStyle.shadowProp,
        wrapperStyle,
        {
          backgroundColor: pressed ? colors.pressedCardColor : colors.white,
        },
      ]}>
      <View>
        <Text fontSize={'lg'} fontWeight={'bold'}>
          {title}
        </Text>
      </View>
      <View>
        <Text color={colors.descriptionColor}>{description}</Text>
      </View>
    </Pressable>
  );
};
