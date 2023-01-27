import React, {useRef} from 'react';

import Container from '../../Container';
import SafeAreaViewContainer from '../../Container/SafeAreaViewContainer';
import Header from '../../Components/Common/Header';
import saveNoteStyle from './styles';
import Input from '../../Components/Common/InputText';
import {View} from 'react-native';
import SaveNoteButton from './SaveNoteButton';
import {useAppDispatch} from '../../Store';
import {updateNote} from '../../Store/Reducer/Notes/slice';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AppStackParamListType, Routes} from '../../Navigation/types';

type UpdateNoteScreenProps = NativeStackScreenProps<
  AppStackParamListType,
  Routes.UpdateNoteScreen
>;
const UpdateNoteScreen: React.FC<UpdateNoteScreenProps> = ({
  navigation,
  route,
}) => {
  const {
    note: {title, description, id},
  } = route.params;

  const noteTitle = useRef(title);
  const noteDescription = useRef(description);

  const dispatch = useAppDispatch();

  const handleSaveNote = React.useCallback(() => {
    dispatch(
      updateNote({
        title: noteTitle.current,
        description: noteDescription.current,
        id: id,
      }),
    );
    navigation.goBack();
  }, [dispatch, id, navigation]);
  return (
    <Container>
      <SafeAreaViewContainer containerStyle={saveNoteStyle.container}>
        <Header title="Note" showGoBackIcon={true} />
        <View style={saveNoteStyle.title}>
          <Input
            placeholder="Enter Title"
            minHeight={16}
            fontSize={'lg'}
            defaultValue={noteTitle.current}
            onChangeText={val => (noteTitle.current = val)}
          />
        </View>
        <View style={saveNoteStyle.description}>
          <Input
            height={'70%'}
            placeholder="Enter Description"
            fontSize={'md'}
            multiline
            defaultValue={noteDescription.current}
            onChangeText={val => (noteDescription.current = val)}
          />
        </View>
        <SaveNoteButton onPress={handleSaveNote} />
      </SafeAreaViewContainer>
    </Container>
  );
};

export default UpdateNoteScreen;
