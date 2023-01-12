import style from './style.module.css';
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "../../components/Layout";
import { useAuth } from "../../context/Auth";
import { ToastMessage } from '../../components/ToastMessage';

export function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [toast, setToast] = useState({
    type: '',
    show: false,
    message: '',
  });
  const auth = useAuth();
  const navigate = useNavigate();

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();

    try {
      await auth.Login(username, password);
      setToast({
        message: 'Successful Login',
        type: 'success'
      });
    } catch ({ response: { data } }) {
      setToast({
        message: data.message,
        type: 'error'
      });
    }

    setToast((toast) => ({
      ...toast,
      show: true,
    }));
  }, [auth, username, password]);

  useEffect(() => {
    if(auth.signed) {
      const timeoutId = setTimeout(() => {
        navigate('/project');
      }, 3000);

      return () => clearTimeout(timeoutId);
    }
  }, [auth, navigate]);

  useEffect(() => {
    if(toast.show) {
      const timeoutId = setTimeout(() => {
        setToast({ show: false, message: '', type: '' });
      }, 3000);


      return () => clearInterval(timeoutId);
    }
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
              placeholder={'username'}
              onChange={({ target }) => setUsername(target.value)}
              required
            ></input>
            <input
              type={'password'}
              placeholder={'password'}
              onChange={({ target }) => setPassword(target.value)}
              required
            ></input>

            <input type={'submit'} value={'Login'}></input>
          </form>
        </div>
      </Layout>
    </section>
  );
}
