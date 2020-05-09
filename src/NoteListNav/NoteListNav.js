//Sidebar on main page
import React from "react";
import dummyStore from "../dummy-store";
import "./NoteListNav.css";

export default function NoteListNav() {
  return (
    <div className="folders">
      {dummyStore.folders.map((i) => {
        return <h2 className="listNav">{i.name}</h2>;
      })}
    </div>
  );
}
