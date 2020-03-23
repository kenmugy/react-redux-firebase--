import React, { useState } from 'react';

const CreateProject = () => {
  const [create, setCreate] = useState({
    title: '',
    content: ''
  });

  const handleSubmit = e => {
    e.preventDefault();
    console.log(create);
    setCreate({
      title: '',
      content: ''
    });
  };

  return (
    <div className='container fm'>
      <h4 className='green-text text-darken-3'>create new project</h4>
      <form action='' onSubmit={handleSubmit} className='white'>
        <div className='input-field'>
          <label htmlFor='title'>Title</label>
          <input
            type='text'
            value={create.title}
            onChange={e => setCreate({ ...create, title: e.target.value })}
            id='title'
          />
        </div>
        <div className='input-field'>
          <label htmlFor='content'>Content</label>
          <textarea
            name=''
            id='content'
            value={create.content}
            onChange={e => setCreate({ ...create, content: e.target.value })}
            className='materialize-textarea'></textarea>
        </div>
        <div className='input-field'>
          <button className='btn blue lighten-2'>Create</button>
        </div>
      </form>
    </div>
  );
};

export default CreateProject;
