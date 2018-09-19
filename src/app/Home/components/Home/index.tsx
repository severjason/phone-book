import * as React from 'react';
import HomeStyles from './styles';
import { AppHomeProps } from '../../interfaces';
import { AppContact, AppContactDivider } from '../../../Contact/interfaces';
import { Preloader } from '../../../common';

const Home: React.StatelessComponent<AppHomeProps> = ({contacts, isLoading}) => {
  return (
    <HomeStyles>
      {isLoading
        ? <Preloader/>
      : contacts.map((contact: AppContact & AppContactDivider, index: number) => (contact.divider)
          ? <div className="divider" key={`${contact.divider}${index}`}>
            {contact.divider}
          </div>
          : <div key={`${contact.id}${contact.name.first}`}>
            {contact.name.first}
          </div>)
      }
    </HomeStyles>
  );
};

export default Home;
