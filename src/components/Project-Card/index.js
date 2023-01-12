import { useCallback, useEffect, useState } from 'react';
import { BiAlarm, BiCalendar, BiEditAlt, BiTrash } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { removeProject } from '../../services/Projects';
import { ToastMessage } from '../ToastMessage';
import style from './style.module.css';

export function ProjectCard({
  id,
  title,
  createdAt,
  deadline,
  done,
  cost,
  onRemove,
}) {
  const [toast, setToast] = useState({
    type: '',
    message: '',
    show: false,
  })

  const handleRemoveProject = useCallback(async () => {
    try {
      await removeProject(id);
      setToast({
        type: 'success',
        message: `Project [${title}] removed successfully!`,
      });
    } catch({ data }) {
      setToast({
        type: 'error',
        message: 'Ocurred an error while trying to delete this Project!',
      });
    }

    setToast((toast) => ({
      ...toast,
      show: true,
    }));
  }, [id, title]);

  useEffect(() => {
    if(toast.show) {
      const timeoutId = setTimeout(() => {
        setToast({ type: '', message: '', show: false });
        onRemove();
      }, 3000);

      return () => clearTimeout(timeoutId);
    }
  }, [toast, onRemove]);

  return (
    <div className={`${style['project-item']} ${done ? style['done'] : ''}`}>
      {toast.show &&
        <ToastMessage
          message={toast.message}
          type={toast.type}
        />
      }
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
        <Link to={`/project/${id}/edit`} className={`${style['button']}`}>
          <BiEditAlt />
          Edit
        </Link>
        <div className={`${style['button']}`} onClick={handleRemoveProject}>
          <BiTrash />
          Remove
        </div>
      </div>
    </div>
  );
}
