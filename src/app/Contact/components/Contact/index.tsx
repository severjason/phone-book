import * as React from 'react';
import { AppContact } from '../../interfaces';
import { Card, CardHeader, CardContent, Typography, Divider, CardActionArea } from '@material-ui/core';
import ContactStyles from './styles';

interface AppContactProps {
  contact: AppContact;
}

class Contact extends React.Component<AppContactProps, {}> {

  private getHeader(): React.ReactNode {
    const {contact} = this.props;
    return (
      <CardHeader
        className={`contact-header`}
        title={`${contact.name.first}  ${contact.name.last}`}
      />
    );
  }

  public render() {
    const {phone} = this.props.contact;
    return (
      <ContactStyles>
        <Card className="contact-card">
          <CardActionArea className={`card-action`}>
            {this.getHeader()}
          </CardActionArea>
          <Divider />
          <CardContent >
            <Typography component="div">
              {phone.map((phone) => <div key={phone}>{phone}</div>)}
            </Typography>
          </CardContent>
        </Card>
      </ContactStyles>
    );
  }
}

export default Contact;
