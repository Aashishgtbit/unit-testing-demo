import {FlashList} from '@shopify/flash-list';
import React from 'react';
import {INotes} from '../../Types/notes';
import {NotesItem} from './NotesItem';
import notesItemStyle from './styles';

interface INotesListProps {
  notes: INotes[];
  handleNoteItemPress: (note: INotes) => void;
}
export const NotesList: React.FC<INotesListProps> = ({
  notes,
  handleNoteItemPress,
}) => {
  const renderItem = ({item}: {item: INotes}) => {
    return (
      <NotesItem
        wrapperStyle={notesItemStyle.wrapperStyle}
        title={item.title}
        description={item.description}
        onPress={() => handleNoteItemPress(item)}
      />
    );
  };
  return (
    <FlashList
      data={notes}
      renderItem={renderItem}
      keyExtractor={({id}) => id}
      estimatedItemSize={150}
    />
  );
};
