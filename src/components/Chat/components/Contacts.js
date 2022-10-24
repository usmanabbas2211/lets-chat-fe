import React from 'react'
import { contacts } from '../constants/contacts'

const Contacts = () => {
    return (
        <div className="contacts">
            <i className="fas fa-bars fa-2x"></i>
            <h2>Contacts</h2>
            {contacts.map((contact) => (
                <div className="contact" key={contact.name}>
                    <div
                        className="pic"
                        style={{ backgroundImage: `url(${contact.imgUrl})` }}
                    ></div>
                    <div className="badge">{contact.count}</div>
                    <div className="name">{contact.name}</div>
                    <div className="message">{contact.message}</div>
                </div>
            ))}
        </div>
    )
}

export default Contacts
