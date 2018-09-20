import * as React from 'react';
import NavBarStyles from './styles';
import { Icon, Menu, Input } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { NavButton } from '../../components';

interface AppNavBarProps {
  isMainPage: boolean;
  isOnSearch: boolean;
  handleSearch: (e: any) => void;
  inputValue: string;
  clearInput: () => void;
}

const NavBar: React.StatelessComponent<AppNavBarProps> =
  ({isOnSearch, inputValue, handleSearch, clearInput, isMainPage}) => (
    <NavBarStyles>
      <Menu position="static">
        <div className="app-bar">
          <NavButton clearInput={clearInput} showBackArrow={!isMainPage}/>
          <p className="title">
            Phone-book app
          </p>
          <div className="flex-grow"/>
          {isOnSearch
            ? (
              <div className="search-container">
                <div className="search-icon">
                  <Icon name="search"/>
                </div>
                <Input
                  value={inputValue}
                  autoFocus={isOnSearch}
                  placeholder="Search…"
                  onChange={handleSearch}
                  className={`search-input ${isOnSearch ? 'add-transition' : ''}`}
                />
              </div>
            ) : (
              <Link to={'/search'}>
                <Icon name="search"/>
              </Link>
            )
          }

        </div>
      </Menu>
    </NavBarStyles>
  );

export default NavBar;