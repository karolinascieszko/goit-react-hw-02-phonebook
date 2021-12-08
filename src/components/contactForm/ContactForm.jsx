import React from 'react';
import styles from "./ContactForm.module.css"

const ContactForm = ({ saveContactData, nameInputId, telNumbId, addContactData, addTelNumb }) => {
  return (
    <div>
      <form onSubmit={saveContactData}>
          <fieldset className={styles.formFieldset}>
            <label className={styles.formLabel} htmlFor={nameInputId}>Name</label>
            <input className={styles.formInput}
              type="text"
              autoComplete="off"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={addContactData}
              id={nameInputId}
            />
            <label className={styles.formLabel}  htmlFor={telNumbId}>Number</label>
            
            <input className={styles.formInput}
              type="tel"
              autoComplete="off"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={addTelNumb}
              id={telNumbId}
            />
            <button className={styles.formBtn} type="submit">Add contact</button>
          </fieldset>
          </form>
    </div>
  )
}

export default ContactForm;