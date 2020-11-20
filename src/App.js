import React, { useState } from "react";
import CreateNotes from "./Components/CreateNotes";
import AllNotes from "./Components/AllNotes";

function App() {
  const [notes, setNotes] = useState([]);

  const createNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

  return (
    <div className="container mt-3 p-3">
      <CreateNotes createNote={createNote} />
      <AllNotes notes={notes} />
    </div>
  );
}

export default App;
