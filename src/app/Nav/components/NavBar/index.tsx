import * as React from 'react';
import NavBarStyles from './styles';
import { Link } from 'react-router-dom';
import { AppBar, IconButton, Toolbar, Input, Typography, Tooltip } from '@material-ui/core';
import { Search, ContactPhoneRounded, ArrowBackRounded } from '@material-ui/icons';

interface AppNavBarProps {
  isOnSearch: boolean;
  handleRedirect: () => void;
  handleSearch: (e: any) => void;
  inputValue: string;
  clearInput: () => void;
}

const NavBar: React.StatelessComponent<AppNavBarProps> =
  ({isOnSearch, handleRedirect, inputValue, handleSearch, clearInput}) => (
  <NavBarStyles>
    <AppBar position="static">
      <Toolbar className="app-bar">
        <Tooltip title={'All contacts'}>
          <Link to={'/'}>
            <IconButton  className="home-button" onClick={clearInput}>
              <ContactPhoneRounded />
            </IconButton>
          </Link>
        </Tooltip>
        <Typography className="title"  variant="title" color="inherit" noWrap={true}>
          Phone-book app
        </Typography>
        <div  className="flex-grow"/>
        {isOnSearch
        && <Tooltip title={'Back to contacts'}>
          <Link to={'/'}>
            <IconButton  className="back-button" onClick={clearInput}>
              <ArrowBackRounded />
            </IconButton>
          </Link>
        </Tooltip>}
        <div className="search-container">
          <div className="search-icon">
            <Search />
          </div>
          <Input
            value={inputValue}
            autoFocus={isOnSearch}
            placeholder="Search…"
            disableUnderline={true}
            onChange={handleSearch}
            className={`search-input ${isOnSearch ? 'add-transition' : ''}`}
            onClick={handleRedirect}
          />
        </div>
      </Toolbar>
    </AppBar>
  </NavBarStyles>
);

export default NavBar;