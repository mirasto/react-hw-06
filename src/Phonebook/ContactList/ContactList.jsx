import ContactItem from "./ContactItem/ContactItem";



const ContactList = ({ contacts, onDelete }) => {
  return (
    <div className="w-full m-auto max-w-md mt-5">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-5">Contacts</h2>

      <ul className="flex flex-col gap-3">
        {contacts.map(({ id, name, number }) => (
          <ContactItem
            key={id}
            id={id}
            name={name}
            number={number}
            onDelete={onDelete}
          />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
