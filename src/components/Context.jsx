import React, { useState, useContext } from "react";
import CartItems from "./Data";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [cart, setCart] = useState(CartItems);

  return <AppContext.Provider value={{ cart }}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () =>{
    return useContext(AppContext)
}

export default {AppContext , AppProvider};
