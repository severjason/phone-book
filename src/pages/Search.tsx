import * as React from 'react';
import SearchContainer from '../app/Nav/containers/SearchContainer';
import { BaseLayout } from '../app/layouts';

const SearchPage: React.StatelessComponent<{}> = (props) => (
  <BaseLayout>
    <SearchContainer {...props}/>
  </BaseLayout>
);

export default SearchPage;
