import * as React from 'react';
import { Icon } from 'semantic-ui-react';
import ContactButtonStyles from './styles';
import { AlertDialog } from '../../../common';
import { AppContactAction } from '../../interfaces';

interface AppContactButtonsProps {
  id: number;
  deleteContact: (id: number) => AppContactAction;
}

interface AppNoteButtonsState {
  opened: boolean;
}

class ContactButtons extends React.Component<AppContactButtonsProps, AppNoteButtonsState> {

  private closeDialog = () => this.setState(() => ({opened: false}));

  public render() {
    const {id, deleteContact} = this.props;
    return (
      <ContactButtonStyles>
          <div onClick={() => console.log(id)} className="contact-button">
            <Icon name="edit outline" className="contact-icon edit-icon"/>
          </div>
          <div className="contact-button">
            <AlertDialog
              content={<Icon name={'trash alternate outline'} className="contact-icon delete-icon"/>}
              onClose={this.closeDialog}
              onDelete={() => deleteContact(id)}
            />
          </div>
      </ContactButtonStyles>
    );
  }
}

export default ContactButtons;
