import {StyleSheet} from 'react-native';
import {colors} from '../../../Styles/colors';

const headerStyle = StyleSheet.create({
  container: {
    marginTop: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 45,
  },

  noDisplayPic: {
    justifyContent: 'flex-start',
  },

  title: {
    fontSize: 22,
    color: colors.headerTitleColor,
  },

  rightComponentTitleWrapperStyle: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  backIcon: {
    height: '100%',
    width: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default headerStyle;
