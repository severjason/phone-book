import * as React from 'react';
import { connect } from 'react-redux';
import { fetchContacts } from '../redux/actions';
import { AppHomeAction, AppHomeProps } from '../interfaces';
import { AppState } from '../../../store/interfaces';
import { getSortedContactsWithDividers } from '../redux/selectors';
import { Home } from '../components';

interface AppHomeDispatch {
  fetchContacts: () => AppHomeAction;
}

class HomeContainer extends React.Component<AppHomeProps & AppHomeDispatch, {}> {

  public componentDidMount() {
    const {fetchContacts, contacts} = this.props;
    if (contacts.length === 0) {
      fetchContacts();
    }
  }

  public render() {
    const {contacts, isLoading, error} = this.props;
    return (
      <Home contacts={contacts} isLoading={isLoading} error={error}/>
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
  })(HomeContainer);
