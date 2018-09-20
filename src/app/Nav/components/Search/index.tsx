import * as React from 'react';
import SearchStyles from './styles';
import Preloader from '../../../common/Preloader';
import { AppSearchProps, AppSearchDispatch } from '../../interfaces';
import { ContactsList } from '../../../Home/components';

const Search: React.StatelessComponent<AppSearchProps & AppSearchDispatch> = (props) => (
  <SearchStyles>
    {props.isLoading ? <Preloader/> : <ContactsList {...props}/>}
  </SearchStyles>
);

export default Search;
