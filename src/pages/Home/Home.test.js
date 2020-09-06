import React from 'react';
import { render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from './Home';

import validData from '../../../__mocks__/validData.json';

beforeEach(() => {
  jest.restoreAllMocks();
})

describe('renders the component', () => {
  it('shows the button text', async () => {
    await act(async () => render(<Home />));
    expect(screen.getByText('POKAŻ')).toBeInTheDocument();
  })
})

describe('data fetching', () => {
  it('shows the users list', async () => {
    jest.spyOn(global, 'fetch').mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(validData)
      })
    );
    await act(async () => render(<Home />));
    expect(screen.getByText('Michael Lawson')).toBeInTheDocument();
    expect(screen.getByText('Lindsay Ferguson')).toBeInTheDocument();
    expect(screen.getByText('Tobias Funke')).toBeInTheDocument();
    expect(screen.getByText('Byron Fields')).toBeInTheDocument();
    expect(screen.getByText('George Edwards')).toBeInTheDocument();
    expect(screen.getByText('Rachel Howell')).toBeInTheDocument();
  })

  it('shows the error text', async () => {
    jest.spyOn(global, 'fetch').mockImplementation(() =>
      Promise.reject()
    );
    await act(async () => render(<Home />));
    expect(screen.getByText('Data fetching error!')).toBeInTheDocument();
  })
})
