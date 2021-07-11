import React from 'react';
import WithProviders from './WithProviders';
import { render, screen } from '@testing-library/react';
import App from './App';
import { server } from './mocks/server';
import { ConfigurableUserData } from './test-utils';

beforeAll(() => {
  server.listen();
});

afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('App', () => {
  it('shows the login form if the user is not logged in', () => {
    render(<WithProviders><App /></WithProviders>);
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
  });

  it('shows the TopNavigation if the user is logged in', async () => {
    render(
      <WithProviders>
        <ConfigurableUserData>
          <App />
        </ConfigurableUserData>
      </WithProviders>
    );

    expect(screen.getByRole('heading', { level: 6 })).toHaveTextContent('Association of Sokovian National Zoos');
  });
});

