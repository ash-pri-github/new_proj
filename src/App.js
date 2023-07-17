import React from "react";
import './App.css';
import Header from "./components/Header";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";

function App() {
  const Contacts = [
    {
      id: "1",
      name: "Prince",
      email: "prince73757@gmail.com",
    },
    {
      id: "2",
      name: "Richa",
      email: "rachakumari27@gmail.com",
    }
  ]
  return (
    <div className="ui container">
      <Header />
      <AddContact />
      <ContactList Contacts={Contacts}/>
    </div>
  );
};

export default App;
