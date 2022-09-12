import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth/auth-operations';
import authSelectors from 'redux/auth/auth-selectors';
import css from './AppBar.module.css';

export const AppBar = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const name = useSelector(authSelectors.getUsername);

  return (
    <div className={css.appBar}>
      <h1 className={css.title}>Phonebook</h1>
      {!isLoggedIn ? (
        <ul className={css.linkBtn}>
          <li>
            <NavLink
              to="/register"
              className={({ isActive }) =>
                `${css.link}` + (isActive ? ` ${css.activeLink}` : '')
              }
            >
              Register
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `${css.link}` + (isActive ? ` ${css.activeLink}` : '')
              }
            >
              Login
            </NavLink>
          </li>
        </ul>
      ) : (
        <div className={css.navigationBox}>
          <span>Welcome,{name}</span>
          <button
            type="button"
            onClick={() => dispatch(authOperations.logOut())}
            className={css.logoutBtn}
          >
            Exit
          </button>
        </div>
      )}
    </div>
  );
};
