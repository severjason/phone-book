import * as React from 'react';
import { connect } from 'react-redux';
import { clearSearchInput, onSearchChange } from '../redux/actions';
import { fetchContacts } from '../../Home/redux/actions';
import { AppNavProps, AppNavDispatch } from '../interfaces';
import { AppState } from '../../../store/interfaces';
import { NavBar } from '../components';
import { RouteComponentProps, withRouter } from 'react-router';
import { escape } from 'lodash';

interface AppRoute {
  match: any;
  history: any;
}

class NavContainer extends React.Component<RouteComponentProps<AppRoute> & AppNavDispatch & AppNavProps, {}> {

  public isOnSearch = () => {
    const {match} = this.props;
    return match.path === '/search';
  }

  public isMainPage = () => {
    const {match} = this.props;
    return match.path === '/';
  }

  public handleRedirect = () => {
    const { history } = this.props;
    if (!this.isOnSearch()) {
      history.push('/search');
    }
  }

  public clearInput = () => this.props.clearSearchInput();

  public handleSearch = (e: any) => {
    const {onSearchChange} = this.props;
    onSearchChange(escape(e.target.value));
  }

  public render() {
    const {inputValue} = this.props;
    return (
     <NavBar
       isMainPage={this.isMainPage()}
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

export default connect<AppNavProps, AppNavDispatch>(
  mapStateToProps,
  {
    onSearchChange,
    clearSearchInput,
    fetchContacts,
  })(withRouter(NavContainer));
