import { createStore } from "redux";

const initialState = {
  notes: ["note1", "note2", "note3"],
};

const reducer = (initialState) => initialState;

export const store = createStore(reducer, initialState);
