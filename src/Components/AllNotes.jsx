import React from "react";
import Note from "./CreateNote";

function AllNotes({ notes }) {
  console.log(notes);
  return (
    <div className="my-3">
      <h5>All Notes</h5>

      {notes.map((note) => (
        <Note key={note.id} note={note} />
      ))}
    </div>
  );
}

export default AllNotes;
