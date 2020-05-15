import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import NoteListNav from "../NoteListNav/NoteListNav";
import NotePageNav from "../NotePageNav/NotePageNav";
import NoteListMain from "../NoteListMain/NoteListMain";
import NotePageMain from "../NotePageMain/NotePageMain";
import NotefulForm from "../NotefulForm/NotefulForm";
import dummyStore from "../dummy-store";
import ApiContext from "../ApiContext";

import { getNotesForFolder, findNote, findFolder } from "../notes-helpers";
import "./App.css";

class App extends Component {
  state = {
    notes: [],
    folders: [],
    addFolder: (name) => {
      let folder = { id: this.state.folders.length, name };
      this.setState({ folders: [...this.state.folders, folder] });
    },
    addNote: (name, folderId, content) => {
      let d = new Date();
      let note = {
        name,
        folderId,
        content,
        id: this.state.notes.length,
        modified: d.toISOString(),
      };
      this.setState({ notes: [...this.state.notes, note] });
    },
    deleteNote: (id) => {
      this.setState({
        notes: this.state.notes.filter((note) => note.id !== id),
      });
    },
  };

  componentDidMount() {
    // fake date loading from API call
    setTimeout(() => this.setState(dummyStore), 600);
  }

  renderNavRoutes() {
    const { notes, folders } = this.state;
    return (
      <>
        {["/", "/folder/:folderId"].map((path) => (
          <Route exact key={path} path={path} component={NoteListNav} />
        ))}
        <Route path="/note/:noteId" component={NotePageNav} />
        <Route path="/add-folder" component={NotePageNav} />
        <Route path="/add-note" component={NotePageNav} />
      </>
    );
  }

  renderMainRoutes() {
    const { notes, folders } = this.state;
    return (
      <>
        {["/", "/folder/:folderId"].map((path) => (
          <Route exact key={path} path={path} component={NoteListMain} />
        ))}
        <Route path="/note/:noteId" component={NotePageMain} />
        <Route path="/add-folder" component={NotefulForm} />
        <Route path="/add-note" component={NotefulForm} />
      </>
    );
  }

  render() {
    return (
      <ApiContext.Provider value={this.state}>
        <div className="App">
          <nav className="App__nav">{this.renderNavRoutes()}</nav>
          <header className="App__header">
            <h1>
              <Link to="/">Noteful</Link>
            </h1>
          </header>
          <main className="App__main">{this.renderMainRoutes()}</main>
        </div>
      </ApiContext.Provider>
    );
  }
}

export default App;
