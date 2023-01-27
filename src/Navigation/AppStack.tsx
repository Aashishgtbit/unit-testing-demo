import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AppStackParamListType, Routes} from './types';
import HomeScreen from '../Screens/Home';
import CreateNoteScreen from '../Screens/CreateNote';
import UpdateNoteScreen from '../Screens/UpdateNote';

const Stack = createNativeStackNavigator<AppStackParamListType>();

const AppStack: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={Routes.HomeScreen} component={HomeScreen} />
      <Stack.Screen
        name={Routes.CreateNoteScreen}
        component={CreateNoteScreen}
      />
      <Stack.Screen
        name={Routes.UpdateNoteScreen}
        component={UpdateNoteScreen}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
