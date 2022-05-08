import React from 'react';
import { nanoid } from 'nanoid';
import styled from 'styled-components';

import { ContactForm } from './components/ContactForm/ContactForm';

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

  render() {
    return (
      <>
        <Section>
          <Title>Phonebook</Title>
          <ContactForm />
        </Section>
      </>
    );
  }
}

const Title = styled.h1`
  margin-bottom: 10px;
`;

const Section = styled.section`
  padding: 20px;
`;
export default App;
