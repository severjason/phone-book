import * as React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../../store/interfaces';
import { RouteComponentProps } from 'react-router';

interface AppRoute {
  match: any;
  history: any;
}

class EditContactContainer extends React.Component<RouteComponentProps<AppRoute> & any, {}> {

  public render() {
    console.log(this.props);
    return (
     <div/>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  inputValue: state.searchState.inputValue,
});

export default connect<any, {}>(
  mapStateToProps,
  {}
)(EditContactContainer);
