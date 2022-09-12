import React from 'react';
import { toast } from 'react-toastify';
import { useDeleteContactsMutation } from 'redux/contactsApi';
import css from './Contact.module.css';
import PropTypes from 'prop-types';

const Contact = ({ id, name, number }) => {
  const [deleteContact] = useDeleteContactsMutation();
  const handleClick = () => {
    deleteContact(id);
    toast.success(`Contact ${name} has been DELETE`);
  };
  return (
    <li className={css.item}>
      <p>
        <span>{name}</span>: <span className={css.number}>{number}</span>
      </p>
      <button type="button" className={css.button} onClick={handleClick}>
        Delete
      </button>
    </li>
  );
};

export default Contact;

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
