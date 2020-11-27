import React from "react";

function Note({ note: { date, note, id, isImportant }, toggleNote }) {
  return (
    <div className="card m-2">
      <div className="card-header">{date}</div>
      <div className="card-body">{note}</div>
      <button className="btn m-2" onClick={() => toggleNote(id)}>
        {isImportant ? "Remove from Important" : "Add to Important"}
      </button>
    </div>
  );
}

export default Note;
