import * as React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../../store/interfaces';
import { RouteComponentProps } from 'react-router';
import { AddContactForm } from '../components';

interface AppRoute {
  match: any;
  history: any;
}

class AddContactContainer extends React.Component<RouteComponentProps<AppRoute> & any, {}> {

  public render() {
    return (
     <AddContactForm {...this.props}/>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  inputValue: state.searchState.inputValue,
});

export default connect<any, {}>(
  mapStateToProps,
)(AddContactContainer);
