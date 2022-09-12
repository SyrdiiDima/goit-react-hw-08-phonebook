import React from 'react';
import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/contactSlice';
import css from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  return (
    <>
      <p className={css.title}>Find contact by name</p>
      <input
        type="text"
        name="filter"
        onChange={event => dispatch(filterContacts(event.target.value))}
        className={css.input}
      ></input>
    </>
  );
};

export default Filter;
