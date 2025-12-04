import ContactForm from '@components/ContactForm/ContactForm';
import ContactList from '@components/ContactList/ContactList';
import Filter from '@components/Filter/Filter';




const PhoneBook = () => {

  return (
    <>
      {/* ContactForm */}
      <ContactForm />
      {/* Filter */}
      <Filter/>
      {/* ContactList */}
      <ContactList/>
    </>
  );
};

export default PhoneBook;
