//the notecard
import React from "react";
import "./Note.css";
import { Link } from "react-router-dom";

export default function Note(props) {
  return (
    <div className="noteCard">
      <div className="cardFlex">
        <Link to={`/note/${props.id}`}>
          <h2>{props.name}</h2>
        </Link>
        <p>{new Date(props.modified).toDateString()}</p>
      </div>
      <button>Delete</button>
    </div>
  );
}
