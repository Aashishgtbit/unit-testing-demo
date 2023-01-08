import React, {FC, memo, useCallback} from 'react';
import {StyleProp, TextStyle, ViewStyle} from 'react-native';

import {Pressable, Text, View} from 'native-base';

import headerStyle from './styles';
import Button from '../Button';
import {BackArrowIcon} from '../../../Assets/Icons';
import {useNavigation} from '@react-navigation/native';

type Props = {
  containerStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  showGoBackIcon: boolean;
  color?: string;
  title?: string;
  onBackArrowPress?: () => void;
  handlePresentModalPress?: () => void;
};

const Header: FC<Props> = ({
  containerStyle,
  title,
  titleStyle,
  showGoBackIcon,
}) => {
  const navigation = useNavigation();
  const handlBackPress = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <View style={[headerStyle.container, containerStyle]}>
      {showGoBackIcon && (
        <Pressable onPress={handlBackPress} style={headerStyle.backIcon}>
          <BackArrowIcon />
        </Pressable>
      )}
      {title ? (
        <View
          style={[title ? headerStyle.rightComponentTitleWrapperStyle : null]}>
          <Text style={[headerStyle.title, titleStyle]}>{title}</Text>
        </View>
      ) : null}
    </View>
  );
};

export default memo(Header);
