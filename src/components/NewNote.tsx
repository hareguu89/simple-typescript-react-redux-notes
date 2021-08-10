import React, { ChangeEvent, useState } from 'react'

export interface NewNoteInterfaceProps {
    addNote(note: string): void;
}

export const NewNote: React.FC<NewNoteInterfaceProps> = ({ addNote }) => {
    const [note, setNote] = useState("");

    const updateNote = (event: ChangeEvent<HTMLInputElement>) => {
        setNote(event.target.value);
    }

    const onAddNote = () => {
        addNote(note)
        setNote("")
    }
    return (
        <>
            <input type="text" name="note" placeholder="Note" onChange={updateNote} />
            <button onClick={onAddNote} >Add Note</button>
        </>
    )
}
