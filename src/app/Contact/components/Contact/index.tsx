import * as React from 'react';
import { AppContact } from '../../interfaces';
import { AppSearchDispatch } from '../../../Nav/interfaces';
import { Card, CardHeader, CardContent, Typography, Divider, CardActionArea } from '@material-ui/core';
import { Phone } from '@material-ui/icons';
import ContactStyles from './styles';
import { ContactButtons } from '../../components';

interface AppContactProps {
  contact: AppContact;
}

class Contact extends React.Component<AppContactProps & AppSearchDispatch, {}> {

  private getExpandedClass(): string {
    const {contact} = this.props;
    return (contact.expanded) ? 'expanded' : '';
  }

  private getHeader(): React.ReactNode {
    const {contact, toggleContact} = this.props;
    return (
      <CardHeader
        className={`contact-header`}
        title={`${contact.name.first}  ${contact.name.last}`}
        onClick={() => toggleContact(contact.id)}
      />
    );
  }

  public render() {
    const {contact, deleteContact} = this.props;
    const {phone} = this.props.contact;
    return (
      <ContactStyles>
        <Card className="contact-card">
          <CardActionArea className={`card-action`}>
            {this.getHeader()}
          </CardActionArea>
          <Divider />
          <CardContent className={`contact-content ${this.getExpandedClass()}`}>
            <Typography component="div" className={`phones-container`}>
              <Phone/>{phone.map((phone) => <div key={phone}>{phone}</div>)}
            </Typography>
            <Divider/>
            <ContactButtons contact={contact} deleteContact={deleteContact}/>
          </CardContent>
        </Card>
      </ContactStyles>
    );
  }
}

export default Contact;
