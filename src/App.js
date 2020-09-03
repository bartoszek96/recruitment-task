import React, { useState } from 'react';
import GlobalStyle from './GlobalStyle';
import { HashRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import Link1 from './pages/Link1/Link1';
import Link2 from './pages/Link2/Link2';
import Error from './pages/Error/Error';
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
      <HashRouter basename='/'>
        <Burger handleBurgerClick={handleBurgerClick} isSideNavOpened={isSideNavOpened} />
        <MenuItemsContainer isSideNavOpened={isSideNavOpened} handleBurgerClick={handleBurgerClick} />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/link1' component={Link1} />
          <Route path='/link2' component={() => <Link2 handleBurgerClick={handleBurgerClick} isSideNavOpened={isSideNavOpened} />} />
          <Route component={Error} />
        </Switch>
      </HashRouter>
    </>
  );
}

export default App;
