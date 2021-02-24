import React from 'react';

import getUserName from 'utils/getUserName';

const UserContext = React.createContext();

const UserProvider = ({ children }) => {
  const name = getUserName();

  return <UserContext.Provider value={name}>{children}</UserContext.Provider>;
};

const useUser = () => {
  const context = React.useContext(UserContext);

  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }

  return context;
};

export { UserProvider, useUser };
