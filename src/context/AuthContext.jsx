import { createContext, useContext, useEffect, useState } from 'react';
// import ShoppyAxios from '../api/axios';
import { login, logout, onUserStateChange } from '../api/firebase';

const AuthContext = createContext();
// const shoppyAxios = new ShoppyAxios();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onUserStateChange(setUser);
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, uid: user && user.uid, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}
