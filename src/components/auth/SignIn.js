import React, { useState } from 'react';

const SignIn = () => {
  const [details, setDetails] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = e => {
    e.preventDefault();
    console.log(details);
    setDetails({
      email: '',
      password: ''
    });
  };
  return (
    <div className='container'>
      <form onSubmit={handleSubmit} className='white'>
        <h5 className='green-text text-darken-3'>Sign In</h5>
        <div className='input-field'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            value={details.email}
            onChange={e => setDetails({ ...details, email: e.target.value })}
          />
        </div>
        <div className='input-field'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            value={details.password}
            onChange={e => setDetails({ ...details, password: e.target.value })}
          />
        </div>
        <div className='input-field'>
          <button className='btn green lighten-1 z-depth-0'>Login</button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
