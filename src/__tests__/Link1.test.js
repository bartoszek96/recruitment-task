import React from 'react';
import { render, fireEvent, waitForElement } from '@testing-library/react';
import '@testing-library/jest-dom';

import Link1 from '../pages/Link1/Link1';

describe('calc test', () => {
  it('calc works correct', async () => {
    const { getByText, getByPlaceholderText, debug } =
      render(
        <Link1 />
      );

    const button = getByText("Oblicz");
    const input = getByPlaceholderText("wpisz liczbę");

    fireEvent.change(input, { target: { value: 100 } });
    fireEvent.click(button);
    debug();
    await waitForElement(() => getByText("10000"));
    debug();
  })
})