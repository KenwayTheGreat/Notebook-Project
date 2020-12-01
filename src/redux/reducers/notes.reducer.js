const initState = {
  notes: [],
  isLoading: false,
};

const reducer = (prevState = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_LOADER":
      return {
        ...prevState,
        isLoading: true,
      };

    case "ADD_NOTE":
      return {
        ...prevState,
        notes: [...prevState.notes, payload],
      };

    case "TOGGLE_NOTE":
      const new_notes = prevState.notes.slice();
      const index = new_notes.findIndex((note) => note.id === payload);
      const note = new_notes[index];

      const new_note = {
        ...note,
        isImportant: !note.isImportant,
      };
      new_notes[index] = new_note;
      return {
        ...prevState,
        notes: new_notes,
      };

    case "LOAD_NOTES":
      return {
        ...prevState,
        notes: payload,
      };

    default:
      return prevState;
  }
};

export default reducer;
