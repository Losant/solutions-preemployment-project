import React, { useReducer } from 'react';
import { login, logout, updateEmail, setAccessRules } from './types';

const initialState = {
  email:  '',
  isLoggedIn: false,
  accessRules: { static: [], dynamic: [] }
};

const userDataReducer = (state, { payload, type }) => {
  switch (type) {
    case logout:
      return {
        initialState
      };
    case login:
      return {
        email: payload.email ? payload.email : initialState.email,
        isLoggedIn: true,
        accessRules: payload.accessRules ? payload.accessRules : initialState.accessRules
      };
    case updateEmail:
      return {
        ...state,
        email: payload.email
      };
    case setAccessRules:
      return {
        ...state,
        accessRules: payload.accessRules
      };
    default:
      throw new Error(`Unknown action ${type} in userDataReducer.js`);
  }
};


const UserContext = React.createContext(null);

const UserDataProvider = ({ children }) => {
  const userData = useReducer(userDataReducer, initialState);
  return <UserContext.Provider value={userData}>{children}</UserContext.Provider>;
};

export { UserDataProvider, UserContext };
