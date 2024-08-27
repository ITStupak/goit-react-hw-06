import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";

const getFilteredList = (contactList, contactsFilter) => {
  return contactList.filter((item) =>
    item.contactName.toLowerCase().includes(contactsFilter.toLowerCase())
  );
};

const ContactList = () => {
  const contactList = useSelector(selectContacts);
  const contactsFilter = useSelector((state) => state.filters.name);
  const filteredContacts = getFilteredList(contactList, contactsFilter);

  return (
    <ul className={css["card-list"]}>
      {filteredContacts.map((contact) => {
        return (
          <li key={contact.id} className={css.card}>
            <Contact
              name={contact.contactName}
              number={contact.contactNumber}
              id={contact.id}
            />
          </li>
        );
      })}
    </ul>
  );
};
export default ContactList;
