import * as React from 'react';
import { DeleteForeverOutlined, EditOutlined } from '@material-ui/icons';
import { IconButton, Tooltip } from '@material-ui/core';
import ContactButtonStyles from './styles';
import { AlertDialog } from '../../../common';
import { AppContact, AppContactAction } from '../../interfaces';

interface AppContactButtonsProps {
  contact: AppContact;
  deleteContact: (id: number) => AppContactAction;
}

interface AppNoteButtonsState {
  opened: boolean;
}

class ContactButtons extends React.Component<AppContactButtonsProps, AppNoteButtonsState> {

  public state = {
    opened: false,
  };

  private openDialog = () => this.setState(() => ({opened: true}));

  private closeDialog = () => this.setState(() => ({opened: false}));

  public render() {
    const {contact, deleteContact} = this.props;
    const {opened} = this.state;
    return (
      <ContactButtonStyles>
        <AlertDialog
          title={`Are you sure? `}
          onClose={this.closeDialog}
          opened={opened}
          onConfirm={() => deleteContact(contact.id)}
        />
        <Tooltip title={`Edit contact`}>
          <IconButton onClick={() => console.log(contact)} className="contact-button">
            <EditOutlined className="contact-icon edit-icon"/>
          </IconButton>
        </Tooltip>
        <Tooltip title={`Delete contact`}>
          <IconButton onClick={this.openDialog} className="contact-button">
            <DeleteForeverOutlined className="contact-icon delete-icon"/>
          </IconButton>
        </Tooltip>
      </ContactButtonStyles>
    );
  }
}

export default ContactButtons;
