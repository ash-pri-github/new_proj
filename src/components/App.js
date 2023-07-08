import React from "react";
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact.js";
import ContactList from "./ContactList";

function App() {
  return (
    <div>
      <Header />
      <AddContact />
      <ContactList />
    </div>
  );
};

export default App;
