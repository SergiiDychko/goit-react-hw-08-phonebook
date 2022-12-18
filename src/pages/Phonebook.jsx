import ContactForm from '../components/ContactForm';
import ContactList from '../components/ContactsList';
import SearchInput from '../components/SearchInput';
import Section from '../components/Section';

const Phonebook = () => {
  return (
    <>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <SearchInput />
        <ContactList />
      </Section>
    </>
  );
};

export default Phonebook;