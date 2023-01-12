import { Link } from 'react-router-dom';
import style from './style.module.css';

export function MenuItem({
  text,
  pathTo,
  onClick
}) {
  return (
    <Link
      to={pathTo}
      className={style['menu-item']}
      onClick={onClick}
    >{ text }</Link>
  );
}