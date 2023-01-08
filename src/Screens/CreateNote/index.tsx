import React, {useId, useRef} from 'react';

import Container from '../../Container';
import SafeAreaViewContainer from '../../Container/SafeAreaViewContainer';
import Header from '../../Components/Common/Header';
import saveNoteStyle from './styles';
import Input from '../../Components/Common/InputText';
import {View} from 'react-native';
import SaveNoteButton from './SaveNoteButton';
import {useAppDispatch} from '../../Store';
import {createNote} from '../../Store/Reducer/Notes/slice';
import {useNavigation} from '@react-navigation/native';

const CreateNoteScreen = () => {
  const noteTitle = useRef('');
  const noteDescription = useRef('');
  const noteId = useId();
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const handleSaveNote = React.useCallback(() => {
    dispatch(
      createNote({
        title: noteTitle.current,
        description: noteDescription.current,
        id: noteId,
      }),
    );
    navigation.goBack();
  }, [dispatch, noteId, navigation]);
  return (
    <Container>
      <SafeAreaViewContainer containerStyle={saveNoteStyle.container}>
        <Header title="Create Note" showGoBackIcon={true} />
        <View style={saveNoteStyle.title}>
          <Input
            placeholder="Enter Title"
            minHeight={16}
            fontSize={'lg'}
            onChangeText={val => (noteTitle.current = val)}
          />
        </View>
        <View style={saveNoteStyle.description}>
          <Input
            height={'70%'}
            placeholder="Enter Description"
            fontSize={'md'}
            multiline
            onChangeText={val => (noteDescription.current = val)}
          />
        </View>
        <SaveNoteButton onPress={handleSaveNote} />
      </SafeAreaViewContainer>
    </Container>
  );
};

export default CreateNoteScreen;
