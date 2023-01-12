import { Link } from 'react-router-dom';
import style from './style.module.css';

export function MenuItem({
  text,
  pathTo
}) {
  return (<Link to={pathTo} className={style['menu-item']}>{ text }</Link>);
}