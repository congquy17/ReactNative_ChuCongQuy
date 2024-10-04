import React, { createContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [imageURL, setImageURL] = useState('');

  return (
    <AppContext.Provider value={{ name, setName, title, setTitle, imageURL, setImageURL }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
