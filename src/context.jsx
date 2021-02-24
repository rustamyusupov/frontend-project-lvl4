import React from 'react';
import cookie from 'js-cookie';
import faker from 'faker';

const getUserName = () => {
  const cookieName = cookie.get('name');

  if (cookieName) {
    return cookieName;
  }

  const newName = faker.internet.userName();

  cookie.set('name', newName);

  return newName;
};

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
