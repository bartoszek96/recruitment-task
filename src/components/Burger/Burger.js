import React from 'react';
import { StyledIcon } from './Burger.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons';

const Burger = ({ handleBurgerClick, isSideNavOpened }) => {

  const TimesIcon = <FontAwesomeIcon icon={faTimes} />;
  const BarsIcon = <FontAwesomeIcon icon={faBars} />;

  return (
    <StyledIcon onClick={handleBurgerClick} isOpened={isSideNavOpened}>
      { isSideNavOpened ? TimesIcon : BarsIcon }
    </StyledIcon>
  )
}
export default Burger