import React from 'react';
import { UserDataProvider } from './services/UserData/UserDataProvider';

const WithProviders = ({ children }) => (
  <UserDataProvider>
    {children}
  </UserDataProvider>
);

export default WithProviders;
