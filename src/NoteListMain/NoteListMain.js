//list of all notes on main page
import React from "react";
import dummyStore from "../dummy-store";
import Note from "../Note/Note";
import "./NoteListMain.css";

export default function NoteListMain(props) {
  const notes = props.match.params.folderId
    ? dummyStore.notes.filter(
        (note) => note.folderId === props.match.params.folderId
      )
    : dummyStore.notes;
  return (
    <div className="NoteListMain List">
      {notes.map((note, i) => {
        return <Note {...note} key={i} />;
      })}
    </div>
  );
}
