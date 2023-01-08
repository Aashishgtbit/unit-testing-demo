import React, {PropsWithChildren} from 'react';
import {StyleProp, Text, TextStyle, ViewStyle} from 'react-native';
import {Button as NativeBaseButton, IButtonProps} from 'native-base';
import buttonStyle from './styles';

interface ButtonProps extends PropsWithChildren {
  title?: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  rounded?: IButtonProps['rounded'];
  height?: IButtonProps['height'];
}
const Button: React.FC<ButtonProps> = ({
  style,
  titleStyle,
  title,
  onPress,
  children,
  rounded,
  height,
}) => {
  return (
    <NativeBaseButton
      height={height}
      rounded={rounded || 'xl'}
      onPress={onPress}
      style={[style]}>
      {title ? (
        <Text style={[buttonStyle.btnTitleStyle, titleStyle]}>{title}</Text>
      ) : (
        <></>
      )}
      {children}
    </NativeBaseButton>
  );
};

export default Button;
