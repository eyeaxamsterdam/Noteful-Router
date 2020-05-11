import React from "react";
import dummyStore from "../dummy-store";
import Note from "../Note/Note";
export default function NoteDetails(props) {
  const note = dummyStore.notes.find(
    (note) => note.id === props.match.params.noteId
  );
  return (
    <div>
      <Note {...note} />
      <p>{note.content}</p>
      <button onClick={() => props.history.goBack()}>back.</button>
    </div>
  );
}
