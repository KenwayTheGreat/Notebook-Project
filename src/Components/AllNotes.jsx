import React from "react";
import Note from "./Note";
import { connect } from "react-redux";

function AllNotes({ notes }) {
  return (
    <div className="my-3">
      <h5>All Notes</h5>
      <div className="row">
        {notes.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  notes: state.notes_reducer.notes,
});
export default connect(mapStateToProps)(AllNotes);
