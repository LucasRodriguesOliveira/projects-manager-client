import { BiAlarm, BiCalendar, BiEditAlt, BiTrash } from 'react-icons/bi';
import style from './style.module.css';

export function ProjectCard({
  title,
  createdAt,
  deadline,
  done,
  cost
}) {
  return (
    <div className={`${style['project-item']} ${done ? style['done'] : ''}`}>
      <div className={style['project-title']}>{title}</div>
      <div className={style['project-dates']}>
        <div className={style['project-start']}>
          <BiCalendar className={style['project-start-icon']}/>
          {createdAt.toLocaleDateString()}
        </div>
        <div className={style['project-deadline']}>
          <BiAlarm className={style['project-deadline-icon']} />
          {deadline.toLocaleDateString()}
        </div>
      </div>
      <div className={style['project-cost']}>$ {cost}</div>
      <div className={style['project-actions']}>
        <div className={`${style['button']}`}>
          <BiEditAlt />
          Edit
        </div>
        <div className={`${style['button']}`}>
          <BiTrash />
          Remove
        </div>
      </div>
    </div>
  );
}
