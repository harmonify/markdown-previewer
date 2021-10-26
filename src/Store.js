/* eslint-disable */
import React, { createContext, useReducer } from "react";
import PLACEHOLDER from "./config/PLACEHOLDER";
import { reducer } from "./reducer";

const initialState = {
  markdown: PLACEHOLDER,
  editorIsMaximized: false,
  previewerIsMaximized: false,
};
export const GlobalContext = createContext(initialState);

const Store = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <GlobalContext.Provider value={[state, dispatch]}>
      {props.children}
    </GlobalContext.Provider>
  );
};
export default Store;
