import * as React from 'react';
import { connect } from 'react-redux';
import { fetchContacts } from '../../Home/redux/actions';
import { AppSearchProps, AppSearchDispatch } from '../interfaces';
import { AppState } from '../../../store/interfaces';
import { getSortedContacts } from '../../Home/redux/selectors';
import { Search } from '../components';
import { filterContacts } from '../../../helpers';
import { ErrorPage } from '../../common';
import { toggleContact, deleteContact } from '../../Contact/redux/actions';
import { AppHomeAction } from '../../Home/interfaces';

interface AppSearchContainerDispatch extends AppSearchDispatch {
  fetchContacts: () => AppHomeAction;
}

class SearchContainer extends React.Component<AppSearchProps & AppSearchContainerDispatch, any> {

  constructor(props: AppSearchProps & AppSearchContainerDispatch) {
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

  public componentDidUpdate(props: AppSearchProps, state: AppSearchProps) {
    const {searchInput, contacts} = this.props;
    if (contacts.length !== state.contacts.length) {
      this.setState({contacts:  props.contacts});
    }
    if (searchInput !== props.searchInput) {
      this.setState({contacts: filterContacts(contacts, searchInput)});
    }
  }

  public render() {
    const {isLoading, searchInput, error, toggleContact, deleteContact} = this.props;
    const {contacts} = this.state;
    return (
      error
        ? <ErrorPage error={error}/>
        : (
          <Search
            contacts={!contacts.length && !searchInput ? this.props.contacts : contacts}
            isLoading={isLoading}
            searchInput={searchInput}
            toggleContact={toggleContact}
            deleteContact={deleteContact}
          />
        )
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  isLoading: state.contactsState.isLoading,
  error: state.contactsState.error,
  contacts: getSortedContacts(state.contactsState),
  searchInput: state.searchState.inputValue,
});

export default connect<AppSearchProps, AppSearchContainerDispatch>(
  mapStateToProps,
  {
    fetchContacts,
    toggleContact,
    deleteContact,
  })(SearchContainer);
