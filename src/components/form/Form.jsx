import React, { Component } from "react";
import { nanoid } from "nanoid";

import styles from "./Form.module.css";

class Form extends Component {
  state = {
    contacts: this.props.contacts,
    name: this.props.name,
    number: "",
  };

    nameInputId = nanoid();
  telNumbInputId = nanoid();

  addContactData = (e) => {
    e.preventDefault();
    this.setState((state) => ({
      ...state,
      name: e.target.value,
      number: e.target.value,
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
          <ul className={styles.contactsList}>
            {this.state.contacts.map(({ id, name, number }) => (
              <li className={styles.contactsItem} key={id}>
                {name}: {number}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Form;
