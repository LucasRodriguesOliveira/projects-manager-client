import style from './style.module.css';
import { useCallback, useState } from 'react';
import { Input } from '../Input';

export function ProjectForm({ project }) {
  const [title, setTitle] = useState(project?.title || '');
  const [zipCode, setZipCode] = useState(project?.zipCode || '');
  const [cost, setCost] = useState(project?.cost || 0);
  const [done, setDone] = useState(project?.done || false);
  const [deadline, setDeadline] = useState(project?.deadline || new Date());
  const [createdAt] = useState(project?.createdAt || new Date());

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
  }, []);

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
          <Input
            type='checkbox'
            placeholder='done'
            onChange={(value) => {
              console.log(value);
              setDone(value);
            }}
            required={!!project?.createdAt}
            value={done}
          />
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
