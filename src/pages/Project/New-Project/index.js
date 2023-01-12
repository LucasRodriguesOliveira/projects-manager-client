import { BiPlus, BiXCircle } from 'react-icons/bi';
import style from './style.module.css';
import { Layout } from "../../../components/Layout";
import { ProjectForm } from '../../../components/Project-Form';
import { Link } from 'react-router-dom';

export function NewProject() {
  return (
    <Layout>
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
          <ProjectForm />
        </div>
      </div>
    </Layout>
  );
}
