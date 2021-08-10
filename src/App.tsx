import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NewNote } from './components/NewNote';
import { NoteState } from './store/noteReducer';
import { addNote } from './store/actions';


const App = () => {
  const notes = useSelector<NoteState, NoteState["notes"]>(state => state.notes)
  const dispatch = useDispatch();

  const onAddNote = (note: string) => {
    dispatch(addNote(note));
  }

  return (
    <>
      <NewNote addNote={onAddNote} />
      <hr />
      <ul>
        {notes.map((el) => {
          return <li key={el}>{el}</li>
        })}
      </ul>

    </>
  );
}

export default App;
