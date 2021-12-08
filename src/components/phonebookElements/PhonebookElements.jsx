import React, { Component } from "react";
import { nanoid } from "nanoid";
import ContactForm from "../contactForm/ContactForm";
import Filter from "../filter/Filter";
import ContactList from "../contactList/ContactList";
import styles from "./PhonebookElements.module.css"

class PhonebookElements extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    name: this.props.name,
    number: "",
    filter: "",
    id: "",
  };

  nameInputId = nanoid();
   telNumbInputId = nanoid();

  addContactData = (e) => {
    e.preventDefault();
    this.setState((state) => ({
      ...state,
      name: e.target.value,
    }));
  };

  addTelNumb = (e) => {
    e.preventDefault();
    this.setState((state) => ({
      ...state,
      number: e.target.value,
    }));
  };


  saveContactData = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    let contactNamesArray = this.state.contacts.map((arr) => arr.name);
    if (contactNamesArray.includes(this.state.name)) {
      alert(`${this.state.name} is already in contacts`);
    } else {
      this.setState((state) => ({
        contacts: [
          ...state.contacts,
          { id: nanoid(), name: this.state.name, number: this.state.number },
        ],
      }));
    }
    form.reset();
  };

  filterName = (e) => {
    e.preventDefault();
    this.setState((state) => ({
      ...state,
      filter: e.target.value,
    }));
  };

  deleteContact = (numbId) => {
    this.setState((state) => ({
      ...state,
      contacts: this.state.contacts.filter(({ id }) => id !== numbId),
    }))
  }

  render() {
    return (
      <div>
        <div className="form-wrapper">
          <h2 className={styles.phonebookHeader}>Phonebook</h2>
          <ContactForm
            saveContactData={this.saveContactData}
            nameInputId={this.nameInputId}
            addContactData={this.addContactData}
            telNumbInputId={this.telNumbInputId}
            addTelNumb={this.addTelNumb}
          />
          <h2 className={styles.contactsHeader}>Contacts</h2>
          <Filter filterName={this.filterName} />

          <ContactList
            filter={this.state.filter}
            contacts={this.state.contacts}
            deleteContact={this.deleteContact}
          />
        </div>
      </div>
    );
  }
}

export default PhonebookElements;