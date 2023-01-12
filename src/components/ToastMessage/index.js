import style from './style.module.css';
import { BiError, BiCheck, BiXCircle } from 'react-icons/bi';
import { useCallback } from 'react';

export function ToastMessage ({
  type,
  message
}) {

  const icon = useCallback((iconType) => {
    const types = {
      warn: <BiError className={style.icon} />,
      success: <BiCheck className={style.icon} />,
      error: <BiXCircle className={style.icon} />,
    };

    return types[iconType];
  }, []);

  return (
    <div className={`${style.toast} ${style[type]}`}>
      { icon(type) }
      <div className={style.message}>{message}</div>
    </div>
  );
}
