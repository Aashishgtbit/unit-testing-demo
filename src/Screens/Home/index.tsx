import React, {useCallback} from 'react';

import Container from '../../Container';
import SafeAreaViewContainer from '../../Container/SafeAreaViewContainer';
import Header from '../../Components/Common/Header';
import {NotesList} from '../../Components/NotesList';
import CreateNoteButton from './CreateNoteButton';
import homeScreenStyle from './styles';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {AppStackParamListType, Routes} from '../../Navigation/types';
import {useAppSelector} from '../../Store';

const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<AppStackParamListType>>();
  const {data} = useAppSelector(({notes}) => notes);
  const handleCreateNote = useCallback(() => {
    navigation.navigate(Routes.CreateNoteScreen);
  }, [navigation]);
  return (
    <Container>
      <SafeAreaViewContainer containerStyle={homeScreenStyle.container}>
        <Header title="My Notes" showGoBackIcon={false} />
        <NotesList notes={data} />
        <CreateNoteButton onPress={handleCreateNote} />
      </SafeAreaViewContainer>
    </Container>
  );
};

export default HomeScreen;
