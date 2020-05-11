//Sidebar on main page
import React from "react";
import dummyStore from "../dummy-store";
import { Link } from "react-router-dom";
import "./NoteListNav.css";

export default function NoteListNav(props) {
  return (
    <div className="folders">
      {dummyStore.folders.map((folder, i) => {
        return (
          <Link key={i} to={"/folder/" + folder.id}>
            <h2
              id={folder.id}
              className={`listNav ${
                props.match.params.folderId &&
                props.match.params.folderId === folder.id &&
                "active"
              }`}
            >
              {folder.name}
            </h2>
          </Link>
        );
      })}
    </div>
  );
}
