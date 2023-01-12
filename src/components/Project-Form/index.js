import style from './style.module.css';
import { useCallback, useEffect, useState } from 'react';
import { Input } from '../Input';

export function ProjectForm({ project, onSubmit, markAsDone }) {
  const [title, setTitle] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [cost, setCost] = useState(0);
  const [done, setDone] = useState(false);
  const [deadline, setDeadline] = useState('');

  const handleSubmit = useCallback((e) => {
    e.preventDefault();

    onSubmit({
      title,
      zipCode,
      cost,
      done,
      deadline
    });
  }, [onSubmit, title, zipCode, cost, done, deadline]);

  useEffect(() => {
    if(project?.id) {
      setTitle(project.title);
      setZipCode(project.zipCode);
      setCost(project.cost);
      setDone(project.done);
      setDeadline(project.deadline);
    }
  }, [project]);

  return (
    <div className={style.box}>
      <form onSubmit={handleSubmit}>
        <Input
          placeholder='title'
          onChange={setTitle}
          required={true}
          value={title}
        />
        <Input
          placeholder='zip code'
          onChange={setZipCode}
          required={true}
          value={zipCode}
        />
        <Input
          placeholder='project cost'
          onChange={setCost}
          required={true}
          value={cost}
        />
        { !!project?.createdAt &&
          <>
            Done
            <Input
              type='checkbox'
              placeholder='done'
              onChange={(value) => {
                markAsDone(value);
                setDone(value);
              }}
              value={done}
            />
          </>
        }
        <Input
          type='date'
          onChange={setDeadline}
          required={true}
          value={deadline}
        />

        <input type={'submit'} value={'Save'}></input>
      </form>
    </div>
  );
}
