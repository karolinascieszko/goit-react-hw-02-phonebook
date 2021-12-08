import React, { Component } from "react";
import { nanoid } from "nanoid";

import styles from "./Form.module.css";

class Form extends Component {
  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
    name: this.props.name,
      number: '',
    filter: '',
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
    }

  saveContactData = (e) => {
      e.preventDefault();
      const formData = e.currentTarget;
    this.setState((state) => ({
      contacts: [...state.contacts, { id: nanoid(), name: this.state.name, number: this.state.number }],
    }));

      formData.reset();
  };
 
  filterName = (e) => {
    e.preventDefault();
    this.setState((state) => ({
      ...state,
      filter: e.target.value,
    }))
    }
    
  render() {
    return (
      <div>
        <div>
          <h2 className={styles.phonebookHeader}>Phonebook</h2>
          <form onSubmit={this.saveContactData}>
            <fieldset className={styles.formField}>
              <label className={styles.formLabel} htmlFor={this.nameInputId}>
                Name
              </label>
              <input
                className={styles.formInput}
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                onChange={this.addContactData}
                id={this.nameInputId}
              />
              <label className={styles.formLabel} htmlFor={this.telNumbInputId}>
              
                Number
              </label>
              <input
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                onChange={this.addTelNumb}
                id={this.telNumbInputId}
              />
              <button className={styles.formButton} type="submit">
                Add contact
              </button>
            </fieldset>
          </form>
                <h2 className={styles.contactsHeader}>Contacts</h2>
                <h3>Find contacts by name</h3>
                <input type="text" name="filter" onChange={this.filterName} pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$" title="Name input"/>
          <ul className={styles.contactsList}>
                    {this.state.filter === ""
                        ? this.state.contacts.map(({ id, name, number }) => (
                            <li key={id}>{name}: {number}</li>
                        ))
                        : this.state.contacts.filter(({ name }) => name.toLowerCase().includes((this.state.filter).toLowerCase())).map(({ id, name, number }) => (
                            <li key={id}>{name}: {number}</li>
                        ))
                    }
   
          </ul>
        </div>
      </div>
    );
  }
}

export default Form;
