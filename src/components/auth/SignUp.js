import React, { useState } from 'react';

const SignUp = () => {
  const [details, setDetails] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: ''
  });

  const handleSubmit = e => {
    e.preventDefault();
    console.log(details);
    setDetails({
      email: '',
      password: '',
      firstName: '',
      lastName: ''
    });
  };
  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <h5 className='green-text text-darken-3'>Sign Up</h5>
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
          <label htmlFor='firstName'>First Name</label>
          <input
            type='text'
            id='firstName'
            value={details.firstName}
            onChange={e =>
              setDetails({ ...details, firstName: e.target.value })
            }
          />
        </div>
        <div className='input-field'>
          <label htmlFor='lastName'>Last Name</label>
          <input
            type='text'
            id='lastName'
            value={details.lastName}
            onChange={e => setDetails({ ...details, lastName: e.target.value })}
          />
        </div>
        <div className='input-field'>
          <button className='btn red lighten-1 z-depth-0'>Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
