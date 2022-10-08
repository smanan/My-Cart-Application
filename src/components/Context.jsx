import React, { useState, useContext, useReducer, createContext } from "react";
import CartItems from "./Data";
import reducer from '../components/Reducer'

const AppContext = createContext();


const initialState = {
  loading:false,
  cart:CartItems,
  total:0,
  amount:0,
}
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer,initialState);

  return <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () =>{
    return useContext(AppContext)
}

export { AppProvider,AppContext};
