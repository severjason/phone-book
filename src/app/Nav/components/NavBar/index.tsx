import * as React from 'react';
import NavBarStyles from './styles';
import { Link } from 'react-router-dom';
import { AppBar, IconButton, Toolbar, Input, Typography, Tooltip } from '@material-ui/core';
import { Search, ContactPhoneRounded } from '@material-ui/icons';

const NavBar: React.StatelessComponent<{}> = () => (
  <NavBarStyles>
    <AppBar position="static">
      <Toolbar>
        <Tooltip title={'All contacts'}>
          <Link to={'/'}>
            <IconButton  className="home-button">
              <ContactPhoneRounded />
            </IconButton>
          </Link>
        </Tooltip>
        <Typography className="title"  variant="title" color="inherit" noWrap={true}>
          Phone-book app
        </Typography>
        <div  className="flex-grow"/>
        <div className="search-container">
          <div className="search-icon">
            <Search />
          </div>
          <Input
            placeholder="Search…"
            disableUnderline={true}
            className="search-input"
          />
        </div>
      </Toolbar>
    </AppBar>
  </NavBarStyles>
);

export default NavBar;