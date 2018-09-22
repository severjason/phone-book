import * as React from 'react';
import { ContactForm } from '../../../common';
import { Redirect } from 'react-router-dom';

interface EditContactProps {
  contact: {
    firstName: string;
    lastName: string;
    phones: string[];
  };
}

const EditContact: React.StatelessComponent<EditContactProps> = ({contact}) => {
  return (
    contact ? <ContactForm initialValues={contact}/> : <Redirect to={'/add'}/>
  );
};

export default EditContact;
