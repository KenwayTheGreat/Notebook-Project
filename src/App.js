import React, { useState } from "react";
import AllNotes from "./Components/AllNotes";
import CreateNote from "./Components/CreateNote";
import ImportantNotes from "./Components/ImportantNotes";

function App() {
  const [notes, setNotes] = useState([]);

  const createNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

  const toggleNote = (id) => {
    const new_notes = notes.slice();
    const index = new_notes.findIndex((note) => note.id === id);

    const note = new_notes[index];

    const new_note = {
      ...note,
      isImportant: !note.isImportant,
    };
    new_notes[index] = new_note;
    setNotes(new_notes);
  };

  console.log(notes);

  return (
    <div className="container mt-3 p-3">
      <CreateNote createNote={createNote} />
      <hr />
      <ImportantNotes notes={notes} toggleNote={toggleNote} />
      <hr />
      <AllNotes notes={notes} toggleNote={toggleNote} />
    </div>
  );
}

export default App;
