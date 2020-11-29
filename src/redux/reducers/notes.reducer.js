const initState = {
  notes: [
    {
      id: 1,
      date: "23/12/2020",
      isImportant: false,
      note: "I am a note 1",
    },
    {
      id: 2,
      date: "24/12/2020",
      isImportant: false,
      note: "I am a note 2",
    },
    {
      id: 3,
      date: "25/12/2020",
      isImportant: false,
      note: "I am a note 3",
    },
  ],
};

const reducer = (prevState = initState, action) => {
  const { type, payload } = action;
  switch (type) {
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

    default:
      return prevState;
  }
};

export default reducer;
