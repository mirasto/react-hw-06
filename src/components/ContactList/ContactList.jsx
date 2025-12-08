import ContactItem from '@components/ContactItem/ContactItem';
import { useSelector } from 'react-redux';

const ContactList = () => {
  const filter = useSelector(state => state.contacts.filter);
  const contacts = useSelector(state => state.contacts.contactsBook);
  const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div className="w-full m-auto max-w-md mt-5">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-5">Contacts</h2>

      <ul className="flex flex-col gap-3">
        {filteredContacts.map(({ id, name, number }) => (
          <ContactItem key={id} id={id} name={name} number={number} />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
