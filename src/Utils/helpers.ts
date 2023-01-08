import {Platform} from 'react-native';

// Checks, if the current os is IOS, returns boolean value
export const isPlatforIOS = (): boolean => Platform.OS === 'ios';

// Checks, if the current os is android, returns boolean value
export const isPlatforAndroid = (): boolean => Platform.OS === 'android';
