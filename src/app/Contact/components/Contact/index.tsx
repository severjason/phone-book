import * as React from 'react';
import { AppContact } from '../../interfaces';
import { AppSearchDispatch } from '../../../Nav/interfaces';
import { Segment, Divider, Icon } from 'semantic-ui-react';
import ContactStyles from './styles';
import { ContactButtons } from '../../components';

class Contact extends React.PureComponent<AppContact & AppSearchDispatch, {}> {

  private getExpandedClass(): string {
    const {expanded} = this.props;
    return (expanded) ? 'expanded' : '';
  }

  private getHeader(): React.ReactNode {
    const {id, name, toggleContact} = this.props;
    return (
      <Segment
        className={`contact-header`}
        onClick={() => toggleContact(id)}
      >
        {`${name.first}  ${name.last}`}
      </Segment>
    );
  }

  public render() {
    const {phone, deleteContact, id} = this.props;
    return (
      <ContactStyles>
        <Segment className="contact-card">
          <Segment className={`card-action`}>
            {this.getHeader()}
          </Segment>
          <Divider />
          <Segment className={`contact-content ${this.getExpandedClass()}`}>
            <div  >
              <div  className={'phones-header'}>
                {phone.length > 1 ? 'Phones:' : 'Phone:'}
              </div>
              <div className={`phones-container`}>
                <Icon name={'phone'}/>{phone.map((phone: any) => <div key={phone}>{phone}</div>)}
              </div>
            </div>
            <Divider/>
            <div className="buttons-container">
              <ContactButtons id={id} deleteContact={deleteContact}/>
            </div>
          </Segment>
        </Segment>
      </ContactStyles>
    );
  }
}

export default Contact;
