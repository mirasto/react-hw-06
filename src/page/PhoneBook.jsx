import ContactForm from '@components/ContactForm/ContactForm';
import ContactList from '@components/ContactList/ContactList';
import Filter from '@components/Filter/Filter';

const PhoneBook = () => {
  return (
    <>
      <ContactForm />
      <Filter />
      <ContactList />
    </>
  );
};

export default PhoneBook;
