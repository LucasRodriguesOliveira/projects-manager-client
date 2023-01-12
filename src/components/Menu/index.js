import { useAuth } from '../../context/Auth';
import { MenuItem } from './menu-item';
import style from './style.module.css';

export function Menu() {
  const auth = useAuth();

  return (
    <nav className={style.nav}>
      <MenuItem text={'Home'} pathTo={'/'} />
      {!auth.signed &&
        <MenuItem text={'Cadastro'} pathTo={'/register'} />
      }
      {auth.signed
        ? <MenuItem text={'Logout'} pathTo={'/'} onClick={auth.Logout}/>
        : <MenuItem text={'Login'} pathTo={'/login'} />
      }
      {
        auth.signed &&
        <MenuItem text={'Project'} pathTo={'/project'} />
      }
    </nav>
  );
}