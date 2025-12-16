import ContactItem from '@components/ContactItem/ContactItem';

import { useSelector } from 'react-redux';
import { selectFilter, selectContacts } from '@redux/selectors';

const ContactList = () => {
  const filter = useSelector(selectFilter);
  const contacts = useSelector(selectContacts);

  const contactSearch = filter.toLowerCase();
  const filteredContacts = contacts
    .filter(contact => contact.name.toLowerCase().includes(contactSearch) || contact.number.includes(contactSearch));

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
