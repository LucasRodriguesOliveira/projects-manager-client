import { useCallback, useEffect, useState } from "react";
import { Layout } from "../../components/Layout";
import { useAuth } from "../../context/Auth";

export function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const auth = useAuth();

  const handleSubmit = useCallback((e) => {
    e.preventDefault();

    auth.Login(username, password);
  }, [auth, username, password]);

  useEffect(() => {
    if(auth.signed) {
      console.log('ok');
    }
  }, [auth]);

  return (
    <section>
      <Layout>
        <div>
          <form onSubmit={handleSubmit}>
            <input
              type={'text'}
              placeholder={'username'}
              onChange={({ target }) => setUsername(target.value)}
            ></input>
            <input
              type={'password'}
              placeholder={'password'}
              onChange={({ target }) => setPassword(target.value)}
            ></input>

            <input type={'submit'} value={'Login'}></input>
          </form>
        </div>
      </Layout>
    </section>
  );
}
