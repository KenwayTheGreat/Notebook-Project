import React, { useState } from "react";
import { connect } from "react-redux";
import { add_new_note } from "../redux/actions/notes.action";

function CreateNote({ add_new_note }) {
  const [note, setNote] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      note,
      id: Math.floor(Math.random() * 1000),
      date: new Date().toJSON().slice(0, 10),
      isImportant: false,
    };

    add_new_note(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <textarea
            cols="3"
            className="form-control"
            placeholder="Write your Dream Note :)"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          ></textarea>
          <button className="btn" type="submit">
            Add Note
          </button>
        </div>
      </form>
    </div>
  );
}

export default connect(null, { add_new_note })(CreateNote);
