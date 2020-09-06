import React from 'react';
import { render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from './Home';

describe('renders the component', () => {
  it('shows the button text', async () => {
    await act(async () => render(<Home />));
    expect(screen.getByText('POKAŻ')).toBeInTheDocument();
  })
})
