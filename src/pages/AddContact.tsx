import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router';
import { AddContactForm } from '../app/Contact/components';
import { BaseLayout } from '../app/layouts';
import { Helmet } from 'react-helmet';

interface AppRoute {
  match: any;
}
const AddContactPage: React.StatelessComponent<RouteComponentProps<AppRoute>> = (props) => (
  <BaseLayout>
    <Helmet title={'Add contacts'}/>
    <AddContactForm {...props}/>
  </BaseLayout>
);

export default withRouter(AddContactPage);
