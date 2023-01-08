import {View} from 'native-base';
import React, {FC, ReactNode} from 'react';
import {SafeAreaView, StyleProp, ViewStyle} from 'react-native';
import containerComponentStyles from './styles';

type Props = {
  children: ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
};

// Reuseable Container component, renders content within the safe area
// boundaries of a device. It is currently only applicable to iOS devices
const SafeAreaViewContainer: FC<Props> = ({children, containerStyle}) => {
  return (
    <SafeAreaView style={[containerComponentStyles.outerContainer]}>
      <View style={[containerComponentStyles.innerContainer, containerStyle]}>
        {children}
      </View>
    </SafeAreaView>
  );
};

export default SafeAreaViewContainer;
