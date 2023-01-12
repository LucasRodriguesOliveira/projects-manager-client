import { MenuItem } from './menu-item';
import style from './style.module.css';

export function Menu() {
  return (
    <nav className={style.nav}>
      <MenuItem text={'Home'} />
      <MenuItem text={'Cadastro'} />
      <MenuItem text={'Login'} />
    </nav>
  );
}