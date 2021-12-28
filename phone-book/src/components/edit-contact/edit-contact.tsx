import React from 'react'
import {useState, useEffect} from 'react'

import styles from '../edit-contact/edit-contact.module.css'

const EditContact = (props:any) => {
  const [ contact, setContact ] = useState(props.contactState)

  useEffect(
    () => {
      setContact(props.contactState)
    },
    [ props ]
  )

  const handleChange = (e:any) => {
    const { name, value } = e.target
    setContact({ ...contact, [name]: value })
  }

  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        props.updateContact(contact.id, contact)
      }}
      className={styles.formInput}
    >
      <input 
        placeholder="name"
        type="text" 
        name="name" 
        value={contact.name} 
        onChange={handleChange} 
      />
      <input 
        placeholder="surename"
        type="text" 
        name="surename" 
        value={contact.surename} 
        onChange={handleChange} 
      />
      <input 
        placeholder="phone"
        type="text" 
        name="phone" 
        value={contact.phone} 
        onChange={handleChange} 
      />
      <button>Done</button>
      <button 
        onClick={() => props.setEdit(false)}
      >
        Cancel
      </button>
    </form>
  )
}

export default EditContact;