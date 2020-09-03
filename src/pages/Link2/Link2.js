import React from 'react';
import Switch from '@material-ui/core/Switch';
import { StyledSection } from './Link2.styles';

const Link2 = ({ handleBurgerClick, isSideNavOpened }) => {
  return (
    <StyledSection>
      <Switch onChange={handleBurgerClick} checked={isSideNavOpened} />
    </StyledSection>
  );
}

export default Link2;
