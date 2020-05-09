//list of all notes on main page
import React from "react";
import dummyStore from "../dummy-store";
import Note from "../Note/Note";
import "./NoteListMain.css";

export default function NoteListMain() {
  const noteListBank = dummyStore.notes;

  return (
    <div className="NoteListMain List">
      {noteListBank.map((i) => {
        return <Note name={i.name} date={i.modified} />;
      })}
    </div>
  );
}
