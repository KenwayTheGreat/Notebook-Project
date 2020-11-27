import React from "react";
import Note from "./Note";

function ImportantNotes({ notes, toggleNote }) {
  return (
    <div className="importantNotes">
      <h4>Important Notes</h4>
      <div className="row">
        {notes
          .filter((note) => note.isImportant === true)
          .map((note) => (
            <Note key={note.id} note={note} toggleNote={toggleNote} />
          ))}
      </div>
    </div>
  );
}

export default ImportantNotes;
