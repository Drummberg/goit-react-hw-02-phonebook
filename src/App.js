import React from 'react';
import { nanoid } from 'nanoid';
import styled from 'styled-components';

import { ContactForm } from './components/ContactForm/ContactForm';
import { Filter } from './components/Filter';
import { ContactList } from './components/ContactList';

export class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = ({ name, number }) => {
    const normalizedFind = name.toLowerCase();
    const findName = this.state.contacts.find(
      contact => contact.name.toLowerCase() === normalizedFind,
    );
    if (findName) {
      return alert(`${name} is already in contacts.`);
    }

    const findNumber = this.state.contacts.find(
      contact => contact.number === number,
    );
    if (findNumber) {
      return alert(`This phone number is already in use.`);
    }

    this.setState(({ contacts }) => ({
      contacts: [{ name, number, id: nanoid() }, ...contacts],
    }));
  };

  getContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  handleFilter = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getContacts();
    return (
      <>
        <Section>
          <Title>Phonebook</Title>
          <ContactForm onSubmit={this.addContact} />
        </Section>
        <Section>
          <Title>Contacts</Title>
          <Filter value={filter} onChange={this.handleFilter} />
          <ContactList
            contacts={visibleContacts}
            onDeleteContact={this.deleteContact}
          />
        </Section>
      </>
    );
  }
}

const Title = styled.h1`
  margin-bottom: 10px;
`;

const Section = styled.section`
  padding-left: 20px;
`;
export default App;
