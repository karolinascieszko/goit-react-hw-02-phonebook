import React from 'react';
import styles from "./Filter.module.css"

const Filter = ({ filterName }) => {
  return (
    <div>
      <h3 className={styles.filterHeader}>Find contacts by name</h3>
          <input className={styles.filterInput}
            type="text"
            name="filter"
            onChange={filterName}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name input"
          />
    </div>
  )
}

export default Filter;