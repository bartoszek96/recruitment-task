import React from 'react';
import { StyledSideNav, StyledMenuItem } from './MenuItemsContainer.styles';

const MenuItemsContainer = ({ isSideNavOpened }) => {

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
        <StyledMenuItem key={item.label}>{item.label}</StyledMenuItem>
      ))}
    </StyledSideNav>
  );
}

export default MenuItemsContainer;