import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

export function Button() {
  return (
    <Link to='login'>
      <a className='btn'><i className="fa-solid fa-user"></i><span>Login</span></a>
    </Link>
  );
}
