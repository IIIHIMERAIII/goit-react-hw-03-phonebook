import React from 'react';
import { nanoid } from 'nanoid'
import { Section } from './section/section';
import { Form } from './contactForm/form';
import { Phonebook } from "./phonebook/phonebook";

export class App extends React.Component {
  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '4591256'},
    {id: 'id-2', name: 'Hermione Kline', number: '4438912'},
    {id: 'id-3', name: 'Eden Clements', number: '6451779'},
    {id: 'id-4', name: 'Annie Copeland', number: '2279126'},
  ],
    name: '',
    number: '',
  };

  onChangeName = evt => {
    this.setState({ name: evt.target.value });
  };
  
  onChangePhone = evt => {
    this.setState({ number: evt.target.value});
  };
  
  onSubmitForm = evt => {
    evt.preventDefault();
    const name = this.state.name;
    if (this.state.contacts.find(
      cont => cont.name.toLowerCase() === name.toLowerCase()
    )) {
      return (alert(`${name} is already in contacts`))
    }
    else {
      let contact = {
        id: nanoid(5),
        name: this.state.name,
        number: this.state.number,
      };
      this.state.contacts.push(contact);
      this.setState({
        name: "",
        number: "",
      })
    }; 
  };


  onFindContact = evt => {
    const name = evt.target.value.toLowerCase()
    const filtered = this.state.contacts.filter(contact => {
      return contact.name.toLowerCase().includes(name);
    })
    if (name.length > 0) {
      this.setState({filteredArr: filtered})
    }
    else {
      this.setState({filteredArr: this.state.contacts})
    }
  };

  onDelete = contactId => {
    this.setState(state => {
      return {
        contacts: state.contacts.filter(contact => contact.id !== contactId),
        filteredArr: state.filteredArr.filter(contact => contact.id !== contactId)
      };
    });
  };

  render() {
    const { name } = this.state;
    const { number } = this.state;
    const data = this.state.contacts;
    const filtered = this.state.filteredArr
    return (
      <div>
      <Section title='Phonebook'>
        <Form 
          onSubmitForm={this.onSubmitForm}
          onChangePhone={this.onChangePhone}
          onChangeName={this.onChangeName}  
          name={name}
          number={number}
          >
        </Form>
        <Section title='Contacts'>
          <Phonebook
            data={data}
            onFindContact={this.onFindContact}
            onDelete={this.onDelete}
            filter={filtered}

          />
        </Section>
        </Section>
      </div>
    );
  };
};