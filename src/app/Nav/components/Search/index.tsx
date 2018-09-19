import * as React from 'react';
import SearchStyles from './styles';
import Preloader from '../../../common/Preloader';
import { AppContact, AppContactDivider } from '../../../Contact/interfaces';
import { AppSearchProps } from '../../redux/interfaces';

const Search: React.StatelessComponent<AppSearchProps> = ({contacts, isLoading}) => (
  <SearchStyles>
    {isLoading
      ? <Preloader/>
      : contacts.map((contact: AppContact & AppContactDivider) =>
        <div key={`${contact.id}${contact.name.first}`}>
        {contact.name.first}
      </div>)
    }
  </SearchStyles>
);

export default Search;
