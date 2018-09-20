import * as React from 'react';
import { connect } from 'react-redux';
import { fetchContacts } from '../redux/actions';
import { AppHomeDispatch, AppHomeProps } from '../interfaces';
import { AppState } from '../../../store/interfaces';
import { getSortedContactsWithDividers } from '../redux/selectors';
import { Home } from '../components';
import { ErrorPage } from '../../common';
import { toggleContact, deleteContact } from '../../Contact/redux/actions';
import { AppSearchProps } from '../../Nav/interfaces';
import { AppContact } from '../../Contact/interfaces';

interface AppHomeState {
  contacts: AppContact[];
}

class HomeContainer extends React.Component<AppHomeProps & AppHomeDispatch, AppHomeState> {

  constructor(props: AppHomeProps & AppHomeDispatch) {
    super(props);
    this.state = {
      contacts: this.props.contacts,
    };
  }

  public componentDidMount() {
    const {fetchContacts, contacts} = this.props;
    if (contacts.length === 0) {
      fetchContacts();
    }
  }

  public componentDidUpdate(props: AppHomeProps, state: AppSearchProps) {
    const {contacts} = this.props;
    if (contacts.length !== state.contacts.length) {
      this.setState({contacts:  props.contacts});
    }
  }

  public render() {
    const {isLoading, error, toggleContact, deleteContact} = this.props;
    const {contacts} = this.state;
    return (
      error
        ? <ErrorPage error={error}/>
        : (
          <Home
            contacts={!contacts.length ? this.props.contacts : contacts}
            isLoading={isLoading}
            toggleContact={toggleContact}
            deleteContact={deleteContact}
          />
        )
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  isLoading: state.contactsState.isLoading,
  contacts: getSortedContactsWithDividers(state.contactsState),
  error: state.contactsState.error,
});

export default connect<AppHomeProps, AppHomeDispatch>(
  mapStateToProps,
  {
    fetchContacts,
    toggleContact,
    deleteContact,
  })(HomeContainer);
