import * as React from 'react';
import { connect } from 'react-redux';
import { clearSearchInput, onSearchChange } from '../redux/actions';
import { fetchContacts } from '../../Home/redux/actions';
import { AppNavProps } from '../redux/interfaces';
import { AppState } from '../../../store/interfaces';
import { NavBar } from '../components';
import { withRouter } from 'react-router';
import { escape } from 'lodash';

class NavContainer extends React.Component<any, {}> {

  public isOnSearch = () => {
    const {match} = this.props;
    return match.path === '/search';
  }

  public handleRedirect = () => {
    const { history } = this.props;
    if (!this.isOnSearch()) {
      history.push('/search');
    }
  }

  public clearInput = () => this.props.finishSearch();

  public handleSearch = (e: any) => {
    const {startSearch} = this.props;
    startSearch(escape(e.target.value));
  }

  public render() {
    const {inputValue} = this.props;
    return (
     <NavBar
       isOnSearch={this.isOnSearch()}
       handleRedirect={this.handleRedirect}
       handleSearch={this.handleSearch}
       inputValue={inputValue}
       clearInput={this.clearInput}
     />
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  inputValue: state.searchState.inputValue,
});

export default connect<AppNavProps, any>(
  mapStateToProps,
  {
    startSearch: onSearchChange,
    finishSearch: clearSearchInput,
    fetchContacts,
  })(withRouter(NavContainer));
