import React from 'react'
import {useState} from 'react'

import AddContact from '../add-contact/add-contact'
import ContactList from '../contact-list/contact-list'
import EditContact from '../edit-contact/edit-contact'
import styles from '../app/app.module.css'

export type AppProps = {}

export const App: React.FC<AppProps> = () => {

	const data = [
		{ id: 1, 
			name: 'Mukhtar', 
			surename: 'Abenov',
			phone: '87025496788'
		},
		{ id: 2, 
			name: 'Ivan', 
			surename: 'Ivanov',
			phone: '+7777777777'
		},
	]

	const initialFormState = { id: null, name: '', surename: '', phone: '' }

	const [ contacts, setContacts ] = useState(data)
	const [ contactState, setContactState ] = useState(initialFormState)
	const [ isEdit, isSetEdit ] = useState(false)

	const addContact = (contact:any) => {
		contact.id = contacts.length + 1
		setContacts([ ...contacts, contact ])
	}

	const editContact = (contact:any) => {
		isSetEdit(true)
		setContactState({ id: contact.id, name: contact.name, surename: contact.surename, phone: contact.phone })
	}

	const updateContact = (id:any, updateContact:any) => {
		isSetEdit(false)
		setContacts(contacts.map(contact => (contact.id === id ? updateContact : contact)))
	}

	const deleteContact = (id:any) => {
		isSetEdit(false)
		setContacts(contacts.filter(contact => contact.id !== id))
	}
	
	return (
		<div className={styles.main}>
				<div className={styles.formWrapper}>
					{ isEdit ? (
						<div className={styles.formsBlock}>
							<h2>Edit contact</h2>
							<EditContact
								isEdit={isEdit}
								setEdit={isSetEdit}
								contactState={contactState}
								updateContact={updateContact}
							/>
						</div>
					) : (
						<div className={styles.formsBlock}>
							<h2>Add contact</h2>
							<AddContact addContact={addContact} />
						</div>
					)}
				</div>		
				<ContactList 
					contacts={contacts} 
					deleteContact={deleteContact}
					editContact={editContact} 	 
				/>
		</div>
	)
}

export default App;