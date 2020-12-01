import React, { useEffect } from "react";
import AllNotes from "./Components/AllNotes";
import CreateNote from "./Components/CreateNote";
import ImportantNotes from "./Components/ImportantNotes";
import { store } from "./redux/store";
import { load_notes } from "./redux/actions/notes.action";

function App() {
  useEffect(() => {
    store.dispatch(load_notes());
  }, []);

  return (
    <div className="container mt-3 p-3">
      <CreateNote />
      <hr />
      <ImportantNotes />
      <hr />
      <AllNotes />
    </div>
  );
}

export default App;
