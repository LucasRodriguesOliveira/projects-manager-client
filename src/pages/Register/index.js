import { useCallback, useState } from "react";
import { Layout } from "../../components/Layout";
import { useAuth } from "../../context/Auth";

export function Register() {
  const auth = useAuth();
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = useCallback((e) => {
    e.preventDefault();

    auth.Register({
      name,
      username,
      password,
    });
  }, [auth, name, password, username]);

  return (
    <section>
      <Layout>
        <div>
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
