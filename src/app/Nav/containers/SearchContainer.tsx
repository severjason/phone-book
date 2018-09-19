import * as React from 'react';
import { connect } from 'react-redux';
import { fetchContacts } from '../../Home/redux/actions';
import { AppSearchProps } from '../redux/interfaces';
import { AppHomeDispatch } from '../../Home/interfaces';
import { AppState } from '../../../store/interfaces';
import { getSortedContacts } from '../../Home/redux/selectors';
import { Search } from '../components';
import { filterContacts } from '../../../helpers';
import { ErrorPage } from '../../common';

class SearchContainer extends React.Component<AppSearchProps & AppHomeDispatch, any> {

  constructor(props: AppSearchProps & AppHomeDispatch) {
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

  public componentDidUpdate(props: AppSearchProps) {
    const {searchInput, contacts} = this.props;
    if (searchInput !== props.searchInput) {
      this.setState({contacts: filterContacts(contacts, searchInput)});
    }
  }

  public render() {
    const {isLoading, searchInput, error} = this.props;
    const {contacts} = this.state;
    return (
      error
        ? <ErrorPage error={error}/>
        : (
          <Search
            contacts={!contacts.length && !searchInput ? this.props.contacts : contacts}
            isLoading={isLoading}
            searchInput={searchInput}
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

export default connect<AppSearchProps, AppHomeDispatch>(
  mapStateToProps,
  {
    fetchContacts,
  })(SearchContainer);
