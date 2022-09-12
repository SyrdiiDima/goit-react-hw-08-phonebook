import { useState } from 'react';
import {
  useGetContactByNameQuery,
  useAddContactMutation,
} from 'redux/contactsApi';
import css from './Form.module.css';
import { toast } from 'react-toastify';

export const Form = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const contacts = useGetContactByNameQuery().data;

  const [addContact] = useAddContactMutation();

  const onChangeInputName = event => {
    setName(event.currentTarget.value);
  };
  const onChangeInputNumber = event => {
    setPhone(event.currentTarget.value);
  };

  const onSubmitForm = event => {
    event.preventDefault();
    const contact = {
      name,
      number: phone,
    };

    if (contacts.find(item => item.name.toLowerCase() === name.toLowerCase())) {
      toast.error(`${name} is already in contacts`);
      reset();
      return;
    }

    addContact(contact);
    toast.success(` ${name} has been added to phonebook`);
    reset();
  };
  const reset = () => {
    setName('');
    setPhone('');
  };

  return (
    <form className={css.form} onSubmit={onSubmitForm}>
      <label className={css.label}>
        Name
        <input
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={onChangeInputName}
          className={css.input}
        />
      </label>
      <label className={css.label}>
        Number
        <input
          type="tel"
          name="number"
          value={phone}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={onChangeInputNumber}
          className={css.input}
        />
      </label>
      <button type="submit" className={css.addContact}>
        Add contact
      </button>
    </form>
  );
};
