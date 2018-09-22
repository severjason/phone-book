import * as React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../../store/interfaces';
import { RouteComponentProps } from 'react-router';
import { EditContact } from '../components';
import { AppContact, AppEditContactDispatch } from '../interfaces';
import { fetchContacts } from '../../Home/redux/actions';
import { formatNumber } from 'libphonenumber-js';

interface AppRoute {
  match: any;
}

interface AppEditContainerProps {
  contacts: AppContact[];
}

class EditContactContainer extends React.Component<RouteComponentProps<AppRoute>
  & AppEditContainerProps & AppEditContactDispatch, {}> {

  public componentDidMount() {
    const {fetchContacts, contacts} = this.props;
    if (contacts.length === 0) {
      fetchContacts();
    }
  }

  private getContact = () => {
    const {contacts, match} = this.props;
    // @ts-ignore
    const routeId: number = +match.params.id;
    let editableContact: any = false;
    contacts.map((contact: AppContact) => {
      if (contact.id === routeId) {
        editableContact = {
          firstName: contact.name.first,
          lastName: contact.name.last,
          phones: contact.phone.map((p: string) => formatNumber(p, 'International')),
        };
      }
    });
    return editableContact;
  }

  public render() {
    const {contacts} = this.props;
    return (
      contacts.length && <EditContact contact={this.getContact()}/>
    );
  }
}

const mapStateToProps = (state: AppState) => {
  return {
    contacts: state.contactsState.contacts,
  };
};

export default connect<AppEditContainerProps, AppEditContactDispatch>(
  mapStateToProps,
  {
    fetchContacts,
  }
)(EditContactContainer);
