import * as React from 'react';
import HomeStyles from './styles';
import { AppHomeProps } from '../../interfaces';
import { Preloader } from '../../../common';
import { ContactsList } from '../../components';

const Home: React.StatelessComponent<AppHomeProps> = ({contacts, isLoading}) => {
  return (
    <HomeStyles>
      {isLoading ? <Preloader/> : <ContactsList contacts={contacts}/>}
    </HomeStyles>
  );
};

export default Home;
