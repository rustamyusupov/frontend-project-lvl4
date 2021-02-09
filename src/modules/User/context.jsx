import React from 'react';

import getUserName from './getUserName';

const UserContext = React.createContext();

const useUser = () => {
  const context = React.useContext(UserContext);

  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }

  return context;
};

const UserProvider = ({ children }) => {
  const name = getUserName();
  const value = name;

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export { UserProvider, useUser };
