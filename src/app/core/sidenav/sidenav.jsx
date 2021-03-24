/* eslint-disable import/no-unresolved */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Nav,
  NavItem,
  NavLink,
  Col,
} from 'reactstrap';

// TODO: Need to update these imports to json
import homeIconBlue from '@images/icons/homeBlue.svg';

import appMenus from '../../util/appAccess.json';

const defaultIcon = {
  HOME: homeIconBlue
};

const Sidenav = () => {
  const [sideNavItem, setNavItem] = useState();

  useEffect(() => {
    if (window.location.pathname) setNavItem(window.location.pathname);
  }, [window.location.pathname]);

  return (
    <Nav vertical className="sidenav">
      <>
        <NavItem onClick={() => setNavItem(0)}>
          <NavLink tag={Link} className="text-white text-center" to={`${appMenus.menus.Home.path}`} onMouseOver={() => { setTooltipName('Home'); isMenuExixts(true); }}>
            <div className={sideNavItem === appMenus.menus.Home.path ? 'highlight' : 'rect'} id="Tooltip">
              <img
                src={defaultIcon[appMenus.menus.Home.name]}
                width="30"
                height="30"
                alt="highLight"
                id="Tooltip"
              />
            </div>
          </NavLink>
          <Col sm="11 pl-4">
            <hr className="white-border mt-1 mb-1" />
          </Col>
        </NavItem>
      </>
    </Nav>
  );
};

export default Sidenav;
