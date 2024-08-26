import { useEffect } from "react";
import { nanoid } from "nanoid";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { addContact, deleteContact } from "./redux/contacts/contactsReducer";
import { setFilterValue } from "./redux/filter/filterReducer";

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.contacts);
  const searchValue = useSelector((state) => state.filter.filterValue);

  useEffect(() => {
    window.localStorage.setItem("contactsValue", JSON.stringify(contacts));
  }, [contacts]);

  const handleSearch = (e) => {
    const value = e.target.value;
    dispatch(setFilterValue(value));
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  const onAddContact = (contact) => {
    const newContact = {
      ...contact,
      id: nanoid(),
    };
    dispatch(addContact(newContact));
  };

  const onDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  return (
    <div>
      <h1 className="title">Phonebook</h1>
      <ContactForm onAddContact={onAddContact} />
      <SearchBox handleSearch={handleSearch} />
      <ContactList
        filteredContacts={filteredContacts}
        onDeleteContact={onDeleteContact}
      />
    </div>
  );
};

export default App;
