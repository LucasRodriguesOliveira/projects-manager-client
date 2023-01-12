import { MenuItem } from './menu-item';
import style from './style.module.css';

export function Menu() {
  return (
    <nav className={style.nav}>
      <MenuItem text={'Home'} pathTo={'/'} />
      <MenuItem text={'Cadastro'} pathTo={'/register'} />
      <MenuItem text={'Login'} pathTo={'/login'} />
    </nav>
  );
}