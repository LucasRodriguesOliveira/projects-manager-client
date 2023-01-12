import { BiPlus, BiXCircle } from 'react-icons/bi';
import style from './style.module.css';
import { Layout } from "../../../components/Layout";
import { ProjectForm } from '../../../components/Project-Form';
import { Link, useNavigate } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import { createProject } from '../../../services/Projects';
import { ToastMessage } from '../../../components/ToastMessage';

export function NewProject() {
  const [toast, setToast] = useState({
    message: '',
    type: '',
    show: false,
  });
  const navigate = useNavigate();
  const handleSubmit = useCallback(async ({
    title,
    zipCode,
    deadline,
    cost,
  }) => {
    try {
      await createProject({ title, zipCode, deadline, cost });
      setToast({
        message: 'Project created Successfully!',
        type: 'success'
      });
    } catch({ data }) {
      setToast({
        message: data.message,
        type: 'error',
      });
    }

    setToast((toast) => ({
      ...toast,
      show: true,
    }));
  }, []);

  useEffect(() => {
    if(toast.show) {
      const timeoutId = setTimeout(() => {
        setToast({ message: '', type: '', show: false });
      }, 3000);

      return () => {
        navigate('/project')
        return clearTimeout(timeoutId);
      };
    }
  }, [toast, navigate]);

  return (
    <Layout>
      {toast.show &&
        <ToastMessage
          message={toast.message}
          type={toast.type}
        />
      }
      <div className={style.box}>
        <div className={style['projects-box']}>
          <div className={style['projects-title-container']}>
            <div className={style['projects-title']}>
              <BiPlus className={style['projects-title-icon']} />
              New Project
            </div>
            <Link to={'/project'} className={style['cancel-button']}>
              <BiXCircle  className={style['projects-cancel-icon']}/>
              Cancel
            </Link>
          </div>
          <ProjectForm onSubmit={handleSubmit}/>
        </div>
      </div>
    </Layout>
  );
}
