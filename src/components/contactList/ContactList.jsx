import React from 'react'
import styles from "./ContactList.module.css"

const ContactList = ({ filter, contacts, deleteContact }) => {
  return (
    <div>
      <ul className={styles.list}>
          {filter === ""
            ? contacts.map(({ id, name, number }) => (
                <li className={styles.listItem} key={id}>
                  {name}: {number}
                  <button type="button" className={styles.btnDel} onClick={() => deleteContact(id)}>Delete</button>
                </li>
              ))
            : contacts
              .filter(({ name }) =>
                name.toUpperCase().includes(filter.toUpperCase())
              )
              .map(({ id, name, number }) => (
                <li className={styles.listItem} key={id}>
                  {name}: {number} 
                  <button type="button" className={styles.btnDel}  onClick={() => deleteContact(id)}>Delete</button>
                </li>
              ))}
        </ul>
    </div>
  )
}

export default ContactList;