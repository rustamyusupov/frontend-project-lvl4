import React from 'react';
import cookie from 'js-cookie';

const UserContext = React.createContext();

const UserProvider = ({ children }) => {
  const name = cookie.get('username');

  return <UserContext.Provider value={name}>{children}</UserContext.Provider>;
};

const useUser = () => {
  const context = React.useContext(UserContext);

  return context;
};

export { UserProvider, useUser };
