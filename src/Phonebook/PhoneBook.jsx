import { useState } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

const PhoneBook = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [filter, setFilter] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      case 'filter':
        setFilter(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const isDuplicate = contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase());

    if (isDuplicate) {
      alert(`${name} is already in contacts`);
      return;
    }

    if (!name.trim() || !number.trim()) {
      alert('Name or number is empty');
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    setContacts(prev => [...prev, newContact]);
    setName('');
    setNumber('');
  };

  const getFilteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const deleteContact = id => {
    setContacts(prev => prev.filter(contact => contact.id !== id));
  };

  return (
    <>
      <ContactForm name={name} number={number} onChange={handleChange} onSubmit={handleSubmit} />
      <Filter onChange={handleChange} />
      <ContactList contacts={getFilteredContacts} onDelete={deleteContact} />
    </>
  );
};

export default PhoneBook;
