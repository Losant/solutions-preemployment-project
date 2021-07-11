import { useContext } from 'react';
import { UserContext } from './UserDataProvider';

export default function useUserData() {
  const contextValue = useContext(UserContext);
  return contextValue;
}
