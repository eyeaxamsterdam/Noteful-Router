import React, { Component } from "react";
import Header from "../Header";
import "./App.css";
import dummyStore from "../dummy-store";
import NoteListMain from "../NoteListMain/NoteListMain";
import NoteListNav from "../NoteListNav/NoteListNav";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NoteDetails from "../NoteDetails/NoteDetails";

export default class App extends Component {
  state = {
    notes: [],
    folders: [],
  };

  render() {
    return (
      <Router>
        <Header className="header" content={dummyStore.notes[0].name} />
        <main className="mainContent">
          <Route exact path="/" component={NoteListNav} />
          <Route exact path="/" component={NoteListMain} />
          <Route path="/folder/:folderId" component={NoteListNav} />
          <Route path="/folder/:folderId" component={NoteListMain} />
          <Route path="/note/:noteId" component={NoteDetails} />
        </main>
      </Router>
    );
  }
}
