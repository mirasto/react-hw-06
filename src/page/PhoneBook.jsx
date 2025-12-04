import ContactForm from '@components/ContactForm/ContactForm';
import ContactList from '@components/ContactList/ContactList';
import Filter from '@components/Filter/Filter';

import { useSelector, useDispatch } from 'react-redux';
import { setContactsFilter, removeContact } from '../redux/contactsSlice';

const PhoneBook = () => {
  const contacts = useSelector(state => state.contacts.contactsBook);
  const filter = useSelector(state => state.contacts.filter);

  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'filter':
        dispatch(setContactsFilter(value));
        break;
      default:
        break;
    }
  };

  const deleteContact = id => {
    dispatch(removeContact(id));
  };

  const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <>
      {/* ContactForm */}
      <ContactForm />
      {/* Filter */}
      <Filter onChange={handleChange} />
      {/* ContactList */}
      <ContactList contacts={filteredContacts} onDelete={deleteContact} />
    </>
  );
};

export default PhoneBook;
