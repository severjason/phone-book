import * as React from 'react';
import { AppContact, AppContactDivider } from '../../../Contact/interfaces';
import { AppSearchDispatch } from '../../../Nav/interfaces';
import ContactsListStyles from './styles';
import { ContactsDivider } from '../../components';
import { Contact } from '../../../Contact/components';
import { EmptyPage } from '../../../common';

interface AppContactListProps {
  contacts: AppContact[];
}

const ContactsList: React.StatelessComponent<AppContactListProps & AppSearchDispatch> = (props) => {
  const {contacts} = props;
  return (
    <ContactsListStyles>
      {contacts.length ? contacts.map((contact: AppContact & AppContactDivider, index: number) => (contact.divider)
        ? <ContactsDivider key={`${contact.divider}${index}`} divider={contact.divider}/>
        : <Contact key={`${contact.id}${contact.name.first}`} {...props} contact={contact}/>
      ) : <EmptyPage/>}
    </ContactsListStyles>
  );
};

export default ContactsList;
