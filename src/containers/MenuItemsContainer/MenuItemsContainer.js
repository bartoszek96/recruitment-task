import React, { useContext } from 'react';
import { StyledSideNav, StyledMenuItem } from './MenuItemsContainer.styles';
import { NavLink } from 'react-router-dom';
import MenuTextVisibilityContext from '../../contexts/MenuTextVisibilityContext/MenuTextVisibilityContext';

const MenuItemsContainer = ({ isSideNavOpened, handleBurgerClick }) => {

  const isTextVisible = useContext(MenuTextVisibilityContext);

  const menuItems = [
    {
      label: "Home",
      link: ""
    },
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
      {isTextVisible && 'TEKST'}
    </StyledSideNav>
  );
}

export default MenuItemsContainer;