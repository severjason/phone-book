import * as React from 'react';
import { connect } from 'react-redux';
import { finishSearch, startSearch } from '../redux/actions';
import { fetchContacts } from '../../Home/redux/actions';
import { AppSearchActions, AppSearchProps } from '../redux/interfaces';
import { AppState } from '../../../store/interfaces';
import { getSortedContacts } from '../../Home/redux/selectors';
import { Search } from '../components';
import { filterContacts } from '../../../helpers';

class SearchContainer extends React.Component<AppSearchProps & AppSearchActions, any> {

  constructor(props: AppSearchProps & AppSearchActions) {
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
    const {isLoading, searchInput} = this.props;
    const {contacts} = this.state;
    return (
     <Search
       contacts={!contacts.length && !searchInput ? this.props.contacts : contacts}
       isLoading={isLoading}
       searchInput={searchInput}
     />
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  isLoading: state.contactsState.isLoading,
  contacts: getSortedContacts(state.contactsState),
  searchInput: state.searchState.inputValue,
});

export default connect<AppSearchProps, AppSearchActions>(
  mapStateToProps,
  {
    startSearch,
    finishSearch,
    fetchContacts,
  })(SearchContainer);
