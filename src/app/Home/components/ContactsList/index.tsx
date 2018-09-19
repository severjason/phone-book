import * as React from 'react';
import { AppContact, AppContactDivider } from '../../../Contact/interfaces';
import ContactsListStyles from './styles';
import { ContactsDivider } from '../../components';
import { Contact } from '../../../Contact/components';

interface AppContactListProps {
  contacts: AppContact[];
}

const ContactsList: React.StatelessComponent<AppContactListProps> = ({contacts}) => {
  return (
    <ContactsListStyles>
      {contacts.map((contact: AppContact & AppContactDivider, index: number) => (contact.divider)
        ? <ContactsDivider key={`${contact.divider}${index}`} divider={contact.divider}/>
        : <Contact key={`${contact.id}${contact.name.first}`} contact={contact}/>
      )}
    </ContactsListStyles>
  );
};

export default ContactsList;
