import React from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import {Input as NativeBaseInput, IInputProps} from 'native-base';
import {ColorType} from 'native-base/lib/typescript/components/types';

interface InputProps {
  style?: StyleProp<ViewStyle>;
  onChangeText?: (text: string) => void;
  placeholder?: string;
  multiline?: boolean;
  keyboardType?: IInputProps['keyboardType'];
  isDisabled?: boolean;
  minHeight?: number;
  fontSize?: IInputProps['fontSize'];
  borderColor?: ColorType;
  height?: IInputProps['height'];
}
const Input: React.FC<InputProps> = ({
  multiline,
  placeholder,
  style,
  onChangeText,
  keyboardType,
  isDisabled,
  minHeight,
  fontSize,
  borderColor,
  height,
}) => {
  return (
    <NativeBaseInput
      borderColor={borderColor || 'gray.500'}
      height={height}
      fontSize={fontSize}
      minHeight={minHeight}
      isDisabled={isDisabled}
      keyboardType={keyboardType}
      multiline={multiline}
      placeholder={placeholder}
      style={[style]}
      onChangeText={onChangeText}
    />
  );
};

export default Input;
