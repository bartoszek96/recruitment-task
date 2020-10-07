import React from 'react';
import { Router } from "react-router-dom";
import { render, screen, act, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { createMemoryHistory } from "history";

import MenuItemsContainer from '../containers/MenuItemsContainer/MenuItemsContainer';

describe('routing', () => {
  it('routing works correct', async () => {
    const history = createMemoryHistory();

    const { getByText, getByPlaceholderText, debug } =
      render(
        <Router history={history}>
        <MenuItemsContainer />
        </Router>
      );

      const HomeLink = getByText("Home");
      const Link1 = getByText("Link1");
      const Link2 = getByText("Link2");

      expect(history.location.pathname).toBe("/");

      fireEvent.click(Link1);
      expect(history.location.pathname).toBe("/link1");

      fireEvent.click(Link2);
      expect(history.location.pathname).toBe("link2");

      fireEvent.click(HomeLink);
      expect(history.location.pathname).toBe("/");
  })
})