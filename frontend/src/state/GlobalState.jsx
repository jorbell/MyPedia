import React, { createContext, useContext, useState } from 'react';

const GlobalStateContext = createContext(null);

export const GlobalStateProvider = ({ children }) => {
  const [books, setBooks] = useState([]); 

  const value = {
    books,
    setBooks,
  };

  return (
    <GlobalStateContext.Provider value={value}>
      {children}
    </GlobalStateContext.Provider>
  );
};

// 3. Create a custom hook for easy consumption
export const useGlobalState = () => {
  const context = useContext(GlobalStateContext);
  if (context === undefined) {
    throw new Error('useGlobalState must be used within a GlobalStateProvider');
  }
  return context;
};
