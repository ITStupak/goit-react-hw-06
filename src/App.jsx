import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import "./App.css";

const App = () => {
  return (
    <>
      <h1 className="title">Phonebook</h1>
      <div className="form_wrapper">
        <ContactForm />
        <SearchBox />
      </div>
      <ContactList />
    </>
  );
};

export default App;
