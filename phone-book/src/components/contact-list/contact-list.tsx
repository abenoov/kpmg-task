import React from 'react'

import styles from '../contact-list/contact-list.module.css'
const ContactList = (props:any) => (
  <table className={styles.contacts}>
    <tr>
      <th>Name</th>
      <th>Surename</th>
      <th>Phone</th>
      <th>Edit or Delete</th>
    </tr>
      {props.contacts.length > 0 ? (
        props.contacts.map((contact:any) => (
          <tr key={contact.id}>
            <td>{contact.name}</td>
            <td>{contact.surename}</td>
            <td>{contact.phone}</td>
            <td>
              <button
                onClick={() => {props.editContact(contact)}}
                className={styles.editButton}
              >
                Edit
              </button>
              <button
                onClick={() => props.deleteContact(contact.id)}
                className={styles.deleteButton}
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td>Empty list</td>
        </tr>
      )}
  </table>
)

export default ContactList;