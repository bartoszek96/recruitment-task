import React from 'react';
import { render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../pages/Home/Home';
import { getUsers } from '../common/usersAPI';

import validData from '../../__mocks__/validData.json';

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
    expect(global.fetch).toHaveBeenCalledTimes(1);
  })

  it('shows the error text when promise is rejected', async () => {
    jest.spyOn(global, 'fetch').mockImplementation(() =>
      Promise.reject()
    );
    await act(async () => render(<Home />));
    expect(screen.getByText('Data fetching error!')).toBeInTheDocument();
    expect(global.fetch).toHaveBeenCalledTimes(1);
  })
})

describe('renders the component', () => {
  it('shows the button text', async () => {
    fetch('https://reqres.in/api/users?page=2')
      .then(response => response.json())
      .then(data => console.log(data));
  })
})

describe("Users API", () => {
  test("it returns an array of users", async () => {
    const json = await getUsers();
    console.log(json, "odp");
    console.log(validData, "validdata");
    expect(json).toMatchObject(validData);
  });
});
