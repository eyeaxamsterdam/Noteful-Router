//the notecard
import React from "react";
import "./Note.css";

export default function Note(props) {
  return (
    <div className="noteCard">
      <div>
        <h2>{props.name}</h2>
        <p>{props.date}</p>
      </div>
      <button>Delete</button>
    </div>
  );
}
