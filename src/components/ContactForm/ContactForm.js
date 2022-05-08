import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export class ContactForm extends React.Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  render() {
    const { name, number } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Label htmlFor={this.nameId}>Name</Label>
        <Input
          type="text"
          name="name"
          value={name}
          placeholder="Enter name"
          onChange={this.handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />

        <Label htmlFor={this.numberId}>Number</Label>
        <Input
          type="tel"
          name="number"
          value={number}
          country={'ua'}
          regions={'europe'}
          onChange={this.handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />

        <Button type="submit">Add contact</Button>
      </Form>
    );
  }
}

const Form = styled.form`
  width: 320px;
  padding: 10px;
  border: 1px solid black;
`;

const Input = styled.input`
  position: relative;
  font-size: 14px;
  background: #ffffff;
  border-radius: 5px;
  line-height: 25px;
  height: 25px;
  width: 250px;
  padding: 0 10px;
  border: 1px solid #cacaca;
  margin-bottom: 20px;
  &:active {
    box-shadow: rgb(155, 25, 233);
  }
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
  font-weight: 500;
  font-size: 20px;
`;

const Button = styled.button`
  cursor: pointer;
  border-radius: 5px;
  &:active {
    background-color: rgb(75, 75, 193);
  }
`;
