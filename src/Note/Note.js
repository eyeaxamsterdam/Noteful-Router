import React from "react";
import { Link } from "react-router-dom";
import ApiContext from "../ApiContext";
import "./Note.css";

export default class Note extends React.Component {
  static defaultProps = {
    onDeleteNote: () => {},
  };
  static contextType = ApiContext;

  handleClickDelete = (e) => {
    e.preventDefault();
    const noteId = this.props.id;

    this.context.deleteNote(noteId);

    this.props.history.push("/");
  };

  render() {
    const { name, id, modified } = this.props;
    return (
      <div className="Note">
        <h2 className="Note__title">
          <Link to={`/note/${id}`}>{name}</Link>
        </h2>
        <button
          className="Note__delete"
          type="button"
          onClick={this.handleClickDelete}
        >
          Delete
        </button>
        <div className="Note__dates">
          <div className="Note__dates-modified">
            Modified: {modified} <span className="Date" />
          </div>
        </div>
      </div>
    );
  }
}
