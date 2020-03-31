import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedOutLinks = () => {
  return (
    <ul className='right'>
      <li className=''>
        <NavLink to='/signup'>Signup</NavLink>
      </li>{' '}
      <li className=''>
        <NavLink to='/signin'>Login</NavLink>
      </li>{' '}
    </ul>
  );
};

export default SignedOutLinks;
