import style from './style.module.css';
import { useCallback, useEffect, useState } from "react";
import { Layout } from "../../components/Layout";
import { ToastMessage } from "../../components/ToastMessage";
import { useAuth } from "../../context/Auth";

export function Register() {
  const auth = useAuth();
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [toast, setToast] = useState({
    type: '',
    show: false,
    message: '',
  });

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();

    try {
      await auth.Register({
        name,
        username,
        password,
      });
      setToast({
        message: 'Account created successfully!',
        type: 'success',
      })
    } catch ({ response: { data } }) {
      setToast({
        message: data.message,
        type: 'warn'
      });
    }

    setToast((toast) => ({
      ...toast,
      show: true,
    }));
  }, [auth, name, password, username]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setToast({
        type: '',
        message: '',
        show: false,
      });
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, [toast]);

  return (
    <section>
      {  toast.show &&
        <ToastMessage message={toast.message} type={toast.type}/>
      }
      <Layout>
        <div className={style.box}>
          <form onSubmit={handleSubmit}>
            <input
              type={'text'}
              placeholder={'Name'}
              onChange={({ target }) => setName(target.value)}
            ></input>
            <input
              type={'text'}
              placeholder={'Username'}
              onChange={({ target }) => setUsername(target.value)}
            ></input>
            <input
              type={'password'}
              placeholder={'Password'}
              charSet={'*'}
              onChange={({ target }) => setPassword(target.value)}
            ></input>
            <input type={'submit'} value={'Create Account'}></input>
          </form>
        </div>
      </Layout>
    </section>
  );
}
