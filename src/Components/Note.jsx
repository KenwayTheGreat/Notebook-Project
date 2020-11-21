import React from "react";

function Note({ note: { date, note } }) {
  console.log(date);
  return (
    <div className="card mb-3">
      <div className="card-header">{date}</div>
      <div className="card-body">{note}</div>
    </div>
  );
}

export default Note;
