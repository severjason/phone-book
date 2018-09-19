import * as React from 'react';
import HeaderStyles from './styles';
import { NavBar } from '../../Nav/components';

const Header: React.StatelessComponent<{}> = () => (
  <HeaderStyles>
    <NavBar/>
  </HeaderStyles>
);

export default Header;
