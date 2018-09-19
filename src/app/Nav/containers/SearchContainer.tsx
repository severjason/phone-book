import * as React from 'react';
import { connect } from 'react-redux';
import { finishSearch, startSearch } from '../redux/actions';
import { fetchContacts } from '../../Home/redux/actions';
import { AppSearchActions, AppSearchProps } from '../redux/interfaces';
import { AppState } from '../../../store/interfaces';
import { getSortedContacts } from '../../Home/redux/selectors';
import { Search } from '../components';

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
    console.log(this.props.searchInput);
  }

  public render() {
    const {contacts, isLoading} = this.props;
    return (
     <Search contacts={contacts} isLoading={isLoading}/>
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
