import React from 'react'
import {useState} from 'react'

import styles from '../add-contact/add-contact.module.css'

const AddContact = (props:any) => {
	const initialFormState = { id: null, name: '', surename: '', phone: '' }
	const [ contact, setContact ] = useState(initialFormState)

	const handleChange = (e:any) => {
		const { name, value } = e.target
		setContact({ ...contact, [name]: value })
	}

	return (
		<form
			onSubmit={e => {
				e.preventDefault()
				if (!contact.name || !contact.surename) return
				props.addContact(contact)
				setContact(initialFormState)
			}}
			className={styles.formInput}
		>
			<input 
				placeholder="Name"
				type="text" 
				name="name" 
				value={contact.name} 
				onChange={handleChange} 
			/>
			<input 
				placeholder="Surename"
				type="text" 
				name="surename" 
				value={contact.surename} 
				onChange={handleChange} 
			/>
			<input 
				placeholder="Phone Number"
				type="text" 
				name="phone" 
				value={contact.phone} 
				onChange={handleChange} 
			/>
			<button>Add contact</button>
		</form>
	)
}

export default AddContact;