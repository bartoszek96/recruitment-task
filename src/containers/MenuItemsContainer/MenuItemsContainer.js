import React from 'react';
import { StyledSideNav, StyledMenuItem } from './MenuItemsContainer.styles';
import { NavLink } from 'react-router-dom';

const MenuItemsContainer = ({ isSideNavOpened, handleBurgerClick }) => {

  const menuItems = [
    {
      label: "Link1",
      link: "link1"
    },
    {
      label: "Link2",
      link: "link2"
    }
  ]

  return (
    <StyledSideNav isSideNavOpened={isSideNavOpened}>
      {menuItems.map((item) => (
        <NavLink to={item.link} onClick={handleBurgerClick} key={item.label}>
          <StyledMenuItem>{item.label}</StyledMenuItem>
        </NavLink>
      ))}
    </StyledSideNav>
  );
}

export default MenuItemsContainer;