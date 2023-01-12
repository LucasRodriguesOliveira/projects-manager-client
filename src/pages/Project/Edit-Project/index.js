import style from './style.module.css';
import { Layout } from "../../../components/Layout";
import { BiCheck, BiXCircle } from 'react-icons/bi';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ProjectForm } from '../../../components/Project-Form';
import { useCallback, useEffect, useState } from 'react';
import { findProject, update, updateStatus } from '../../../services/Projects';
import { ToastMessage } from '../../../components/ToastMessage';

export function EditProject() {
  const navigate = useNavigate();
  const [toast, setToast] = useState({
    message: '',
    type: '',
    show: false,
  });
  const [project, setProject] = useState({
    title: '',
  });
  const { id } = useParams();

  const fetchProjectById = useCallback(async () => {
    try {
      const { data } = await findProject(id);
      setProject(data);
    } catch({ data }) {
      setToast({
        message: 'Failed to fetch this project data!',
        type: 'error',
        show: true,
      });
    }
  }, [id]);

  useEffect(() => {
    if (!project?.id) {
      fetchProjectById();
    }
  }, [project, fetchProjectById]);

  const markAsDone = useCallback(async (done) => {
    try {
      await updateStatus(id, done);
    } catch({ data }) {
      setToast({
        message: data.message,
        type: 'error',
        show: true,
      });
    }
  }, [id]);

  const onSubmit = useCallback(async (data) => {
    try {
      await update(id, data);
      setToast({
        message: 'Project updated!',
        type: 'success',
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
  }, [id]);

  useEffect(() => {
    if(toast.show) {
      const isSuccess = toast.type === 'success';
      const timeoutId = setTimeout(() => {
        setToast({
          message: '',
          type: '',
          show: false,
        });
      }, 3000);

      return () => {
        if (isSuccess) {
          navigate('/project');
        }
        return clearTimeout(timeoutId)
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
              <BiCheck className={style['projects-title-icon']} />
              Edit Project { project.title }
            </div>
            <Link to={'/project'} className={style['cancel-button']}>
              <BiXCircle  className={style['projects-cancel-icon']}/>
              Cancel
            </Link>
          </div>
          <ProjectForm project={project} markAsDone={markAsDone} onSubmit={onSubmit} />
        </div>
      </div>
    </Layout>
  );
}
