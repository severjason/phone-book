import * as React from 'react';
import { connect } from 'react-redux';
import { fetchContacts } from '../redux/actions';
import { AppHomeAction } from '../interfaces';

interface AppHomeDispatch {
  fetchContacts: () => AppHomeAction;
}

class HomeContainer extends React.Component<AppHomeDispatch, {}> {

  public componentDidMount() {
    const { fetchContacts } = this.props;
    fetchContacts();
  }

  public render() {
    return (
      <div> home</div>
    );
  }
}

export default connect<{}, AppHomeDispatch>(
  null,
  {
    fetchContacts,
  })(HomeContainer);
