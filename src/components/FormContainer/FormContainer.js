import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { Form } from 'components/Form/Form';
import React from 'react';
import style from './FormContainer.module.css';

export const FormContainer = () => {
  return (
    <section className={style.formContainer}>
      <Form />
      <Filter />
      <ContactList />
    </section>
  );
};
