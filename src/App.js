import React, { useState } from 'react';
import GlobalStyle from './GlobalStyle';
import MenuItemsContainer from './containers/MenuItemsContainer/MenuItemsContainer';
import Burger from './components/Burger/Burger';

function App() {

  const [isSideNavOpened, toggleSideNavOpened] = useState(false);

  const handleBurgerClick = () => {
    toggleSideNavOpened(!isSideNavOpened);
  }

  return (
    <>
      <GlobalStyle />
      <Burger handleBurgerClick={handleBurgerClick} isSideNavOpened={isSideNavOpened} />
      <MenuItemsContainer isSideNavOpened={isSideNavOpened} />
    </>
  );
}

export default App;
