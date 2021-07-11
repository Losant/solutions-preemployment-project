import React, { useEffect } from 'react';
import useUserData from './services/UserData/useUserData';
import { login } from './services/UserData/types';


export const ConfigurableUserData = ({ rules, children }) => {
  const [userData, dispatchUserData] = useUserData();

  useEffect( () => {
    dispatchUserData({
      type: login,
      payload: {
        email: 'user@example.com',
        accessRules: rules ? rules : { static: [], dynamic: [] }
      }
    });
  }, [dispatchUserData, rules]);


  return (<>
    <div data-testid="test-email">{userData.email}</div>
    <div data-testid="test-logged-in">{userData.isLoggedIn ? 'true' : 'false'}</div>
    {children}
  </>);
};
