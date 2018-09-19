import * as React from 'react';
import SearchStyles from './styles';
import Preloader from '../../../common/Preloader';
import { AppSearchProps } from '../../redux/interfaces';
import { ContactsList } from '../../../Home/components';

const Search: React.StatelessComponent<AppSearchProps> = ({contacts, isLoading}) => (
  <SearchStyles>
    {isLoading ? <Preloader/> : <ContactsList contacts={contacts}/>}
  </SearchStyles>
);

export default Search;
