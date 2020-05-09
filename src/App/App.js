import React, { Component } from "react";
import Header from "../Header";
import "./App.css";
import dummyStore from "../dummy-store";
import NoteListMain from "../NoteListMain/NoteListMain";
import NoteListNav from "../NoteListNav/NoteListNav";

export default class App extends Component {
  render() {
    return (
      <>
        <Header className="header" content={dummyStore.notes[0].name} />
        <main className="mainContent">
          <NoteListNav />
          <NoteListMain />
        </main>
      </>
    );
  }
}
