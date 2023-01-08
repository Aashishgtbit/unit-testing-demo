import {StyleSheet} from 'react-native';
import {colors} from '../Styles/colors';
import {isPlatforAndroid} from '../Utils/helpers';

// Styles for Container components
const containerComponentStyles = StyleSheet.create({
  outerContainer: {
    flex: 1,
  },
  innerContainer: {
    paddingTop: isPlatforAndroid() ? 10 : 0,
    backgroundColor: colors.transparent,
    flex: 1,
    paddingHorizontal: 14,
    paddingBottom: 20,
  },
  streatchedContainer: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
});

export default containerComponentStyles;
