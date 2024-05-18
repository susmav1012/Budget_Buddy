"use client"
// app/context/MyContext.js or components/context/MyContext.js
import React, { createContext, useContext, useState } from 'react';

const MyContext = createContext(null);

export const MyContextProvider = ({ children }) => {
  const [state, setState] = useState({});

  return (
    <MyContext.Provider value={{ state, setState }}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => useContext(MyContext);
