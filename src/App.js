import React, { useState } from 'react';
import GlobalStyle from './GlobalStyle';
import {
  HashRouter,
  Route,
  Switch
} from 'react-router-dom';
import MenuTextVisibilityContext from './contexts/MenuTextVisibilityContext/MenuTextVisibilityContext';
import Burger from './components/Burger/Burger';
import MenuItemsContainer from './containers/MenuItemsContainer/MenuItemsContainer';
import Home from './pages/Home/Home';
import Link1 from './pages/Link1/Link1';
import Link2 from './pages/Link2/Link2';
import Error from './pages/Error/Error';

function App() {

  const [isSideNavOpened, toggleIsSideNavOpened] = useState(false);
  const [isMenuTextVisible, setIsMenuTextVisible] = useState(false);

  const handleBurgerClick = () => {
    toggleIsSideNavOpened(!isSideNavOpened);
  }

  const handleShowMenuTextButtonClick = () => {
    setIsMenuTextVisible(true);
  }

  return (
    <MenuTextVisibilityContext.Provider value={isMenuTextVisible}>
      <GlobalStyle />
      <HashRouter basename='/'>
        <Burger handleBurgerClick={handleBurgerClick} isSideNavOpened={isSideNavOpened} />
        <MenuItemsContainer isSideNavOpened={isSideNavOpened} handleBurgerClick={handleBurgerClick} />
        <Switch>
          <Route path='/' exact component={() => <Home handleShowMenuTextButtonClick={handleShowMenuTextButtonClick} />} />
          <Route path='/link1' component={Link1} />
          <Route path='/link2' component={() => <Link2 handleBurgerClick={handleBurgerClick} isSideNavOpened={isSideNavOpened} />} />
          <Route component={Error} />
        </Switch>
      </HashRouter>
    </MenuTextVisibilityContext.Provider>
  );
}

export default App;
