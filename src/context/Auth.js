import { createContext, useContext, useEffect, useState } from "react";
import { API } from "../services/Api";
import * as Storage from '../services/Storage';

export const AuthContext = createContext({});
const STORAGE_KEY = {
  user: 'user',
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({ id: '' });

  useEffect(() => {
    const userId = Storage.get(STORAGE_KEY.user);

    if(userId) {
      setUser({ id: userId });
      API.api.defaults.headers.userId = userId;
    }
  }, []);

  function addUser(id) {
    setUser({ id });
    API.api.defaults.headers.userId = id;
    Storage.add(STORAGE_KEY.user, id, false);
  }

  async function Login(username, password) {
    const { data } = await API.post('users/login', {
      username,
      password,
    });

    addUser(data);
  };

  async function Register(user) {
    const { data } = await API.post('users', {
      ...user
    });

    addUser(data.id);
  };

  async function Logout() {
    setUser({ id: '' });
    delete API.api.defaults.headers.userId;
    Storage.remove(STORAGE_KEY.user);
  };

  return (
    <AuthContext.Provider value={{ signed: Boolean(user.id), user, Login, Register, Logout }}>
      { children }
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
}
