import React, { useState } from "react";
import AllNotes from "./Components/AllNotes";
import CreateNote from "./Components/CreateNote";

function App() {
  const [notes, setNotes] = useState([]);

  const createNote = (newNote) => {
    setNotes([newNote]);
  };

  return (
    <div className="container mt-3 p-3">
      <CreateNote createNote={createNote} />
      <hr />
      <AllNotes notes={notes} />
    </div>
  );
}

export default App;
