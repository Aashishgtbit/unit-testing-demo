import {StatusBar} from 'native-base';
import React, {FC, ReactNode} from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import {isPlatforIOS} from '../Utils/helpers';
import containerComponentStyles from './styles';

type Props = {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
};

const Container: FC<Props> = ({children, style}) => {
  return (
    <View style={[containerComponentStyles.streatchedContainer, style]}>
      <StatusBar barStyle={isPlatforIOS() ? 'dark-content' : 'light-content'} />
      {children}
    </View>
  );
};

export default Container;
