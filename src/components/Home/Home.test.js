import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';
import { server } from '../../mocks/server';

beforeAll(() => {
  server.listen();
});

afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Home', () => {
  it('shows a logged-in message', () => {
    render(<Home />);

    expect(screen.getByRole('heading', { level: 4 })).toHaveTextContent('You are now logged in');
  });
});
