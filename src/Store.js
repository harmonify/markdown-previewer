/* eslint-disable */
import React, { createContext, useReducer } from "react";
import PLACEHOLDER from "./config/PLACEHOLDER";
import { reducer } from "./reducer";

const initialState = {
  markdown: PLACEHOLDER,
};
export const Context = createContext(initialState);

const Store = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={[state, dispatch]}>
      {props.children}
    </Context.Provider>
  );
};
export default Store;
