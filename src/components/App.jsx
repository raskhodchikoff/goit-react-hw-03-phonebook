import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

import { MainTitle, ContactsTitle } from './App.styled';
import { Box } from './Box';

// import saveContacts from 'db/contacts';

export class App extends Component {
  state = {
    // contacts: saveContacts,
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(_, prevState) {
    const newContacts = this.state.contacts;
    const prevContacts = prevState.contacts;

    if (newContacts !== prevContacts) {
      localStorage.setItem('contacts', JSON.stringify(newContacts));
    }
  }

  formSubmitHandler = (data, actions) => {
    data.id = nanoid();
    const contacts = this.state.contacts;
    const doubleName = contacts.find(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    );
    if (doubleName) {
      return Notify.warning(`${data.name} is already in contacts.`, {
        timeout: 2000,
        position: 'center-top',
        fontSize: '20px',
        width: '400px',
        clickToClose: true,
      });
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, data],
    }));
    actions.resetForm();
  };

  onFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  filteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContact = dataId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== dataId),
    }));
  };

  render() {
    const { filter } = this.state;
    return (
      <Box
        as="main"
        mx="auto"
        mt={5}
        width="400px"
        p={5}
        bg="mainBgr"
        border="m"
        borderRadius="m"
        borderColor="greyBorder"
        boxShadow="shadow"
      >
        <Box as="section" mb={3}>
          <MainTitle>Phonebook</MainTitle>
          <ContactForm onSubmit={this.formSubmitHandler} />
        </Box>
        <Box as="section">
          <ContactsTitle>Contacts</ContactsTitle>
          <Filter onFilter={this.onFilter} value={filter} />
          <ContactList
            contacts={this.filteredContacts()}
            onDeleteContact={this.deleteContact}
          />
        </Box>
      </Box>
    );
  }
}
