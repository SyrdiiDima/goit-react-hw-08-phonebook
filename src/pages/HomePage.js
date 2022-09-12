import { NavLink } from 'react-router-dom';
import React from 'react';

const HomePage = () => {
  return (
    <>
      <p className="homeTitle">
        To start working with the contact book, please{' '}
        <NavLink to="/register">REGISTER</NavLink> or if you have an account -{' '}
        <NavLink to="/login">LOGIN</NavLink>
      </p>
    </>
  );
};

export default HomePage;
