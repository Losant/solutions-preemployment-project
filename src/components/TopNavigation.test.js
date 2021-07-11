import React from 'react';
import WithProviders from '../WithProviders';
import { render, screen, waitFor } from '@testing-library/react';
import TopNavigation from './TopNavigation';
import { server } from '../mocks/server';
import { ConfigurableUserData } from '../test-utils';
import userEvent from '@testing-library/user-event';

beforeAll(() => {
  server.listen();
});

afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('TopNavigation', () => {
  it('shows a title', () => {
    render(<WithProviders><TopNavigation /></WithProviders>);
    expect(screen.getByRole('heading', { level: 6 })).toHaveTextContent('Association of Sokovian National Zoos');
  });

  it('shows a menu button', () => {
    render(<WithProviders><TopNavigation /></WithProviders>);
    expect(screen.getByLabelText('menu')).toBeInTheDocument();
  });

  it('shows a logout button', () => {
    render(<WithProviders><TopNavigation /></WithProviders>);
    expect(screen.getByRole('button', { name: 'Logout' })).toBeInTheDocument();
  });

  it('logs the user out if user clicks the logout button', async () => {
    render(
      <WithProviders>
        <ConfigurableUserData>
          <TopNavigation />
        </ConfigurableUserData>
      </WithProviders>
    );

    expect(screen.getByTestId('test-logged-in')).toHaveTextContent('true');

    const logoutButton = screen.getByRole('button', { name: 'Logout' });
    userEvent.click(logoutButton);

    await waitFor( () => {
      expect(screen.getByTestId('test-logged-in')).toHaveTextContent('false');
    });
  });
});

