import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { API } from "../services/Api";
import * as Storage from '../services/Storage';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [userId, setUserId] = useState('');
  const [signed] = useState(Boolean(userId));

  const Login = useCallback(async (username, password) => {
    const { data } = await API.post('users/login', {
      username,
      password,
    });

    setUserId(data);
    API.api.defaults.headers.userId = data;
    Storage.add('user', data, false);
  }, []);

  const Register = useCallback(async (user) => {
    const { data } = await API.post('users', {
      ...user
    });

    setUserId(data.id);
    API.api.defaults.headers.userId = data.id;
    Storage.add('user', data, false);
  }, []);

  const Logout = useCallback(async () => {
    setUserId(null);
    delete API.api.defaults.headers.userId;
    Storage.remove('user');
  }, []);

  useEffect(() => {
    const user = Storage.get('user');

    if(user) {
      setUserId(user);
      API.api.defaults.headers.userId = user;
    }
  }, []);

  return (
    <AuthContext.Provider value={{ signed, userId, Login, Register, Logout }}>
      { children }
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
}
