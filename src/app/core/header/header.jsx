/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import {
  Navbar,
  NavbarBrand,
} from 'reactstrap';

import homelogo from '../../images/helixSenseLogo.svg';

import './header.scss';
const Header = () => {

  return (
    <div className="header">
      <Navbar color="light" expand="md">
        <NavbarBrand className="p-0" href="/">
          <img
            src={homelogo}
            width="100"
            height="40"
            className="d-inline-block align-top"
            alt="Helixsense Portal"
          />
        </NavbarBrand>
      </Navbar>
    </div>
  );
};

export default Header;
