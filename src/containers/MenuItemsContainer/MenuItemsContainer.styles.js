import styled from 'styled-components';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';

export const StyledSideNav = styled.nav`
  transform: ${({ isSideNavOpened }) => isSideNavOpened ? 'translateX(0%)' : 'translateX(-100%)'};
  transition: transform .5s;
  position: fixed;
  left: 0;
  width: 200px;
  height: 100vh;
  padding-top: 60px;
  border-right: 5px solid black;
  background: rgb(165, 165, 165);
`;

export const StyledMenuItem = withStyles({
  root: {
    color: 'blue',
  }
})(MenuItem);
