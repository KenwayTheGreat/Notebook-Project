import React from "react";
import AllNotes from "./Components/AllNotes";
import CreateNote from "./Components/CreateNote";
import ImportantNotes from "./Components/ImportantNotes";

function App() {
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
