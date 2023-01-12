import style from './style.module.css';
import { Layout } from "../../components/Layout";
import {
  BiSpreadsheet,
  BiPlus,
} from 'react-icons/bi';
import { ProjectCard } from '../../components/Project-Card';
import { useCallback, useEffect, useState } from 'react';
import { listProjects } from '../../services/Projects';
import { useAuth } from '../../context/Auth';
import { Link } from 'react-router-dom';

export function Project() {
  const [projects, setProjects] = useState([]);
  const auth = useAuth();

  const fetchProjects = useCallback(async () => {
    const { data: projectsResult } = await listProjects(auth.signed);
    setProjects(projectsResult);
  }, [auth]);

  useEffect(() => {
    if(!projects.length) {
      fetchProjects();
    }
  }, [projects, fetchProjects]);

  const handleOnRemoveProject = useCallback(async () => {
    fetchProjects();
  }, [fetchProjects]);

  return (
    <section>
      <Layout>
        <div className={style.box}>
          <div className={style['projects-box']}>
            <div className={style['projects-title-container']}>
              <div className={style['projects-title']}>
                <BiSpreadsheet className={style['projects-title-icon']} />
                Projects
              </div>
              <Link to={'/new-project'} className={style['new-project-button']}>
                <BiPlus  className={style['projects-new-project-icon']}/>
                New Project
              </Link>
            </div>
            <div className={style['projects-list']}>
              {projects?.length > 0 && projects.map((project) => (
                <ProjectCard
                  id={project.id}
                  key={project.id}
                  title={project.title}
                  cost={project.cost}
                  createdAt={new Date(project.createdAt)}
                  deadline={new Date(project.deadline)}
                  done={project.done}
                  onRemove={handleOnRemoveProject}
                />
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </section>
  );
}
