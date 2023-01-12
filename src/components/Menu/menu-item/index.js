import style from './style.module.css';

export function MenuItem({
  text,
  pathTo
}) {
  return (<div className={style['menu-item']}>{ text }</div>);
}