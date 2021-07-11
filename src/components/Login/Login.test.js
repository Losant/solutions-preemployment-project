import React from 'react';
import WithProviders from '../../WithProviders';
import { render, screen } from '@testing-library/react';
import Login from './Login';
import { server } from '../../mocks/server';

beforeAll(() => {
  server.listen();
});

afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Login', () => {
  it('shows an email input', () => {
    render(<WithProviders><Login /></WithProviders>);
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
  });

  it('shows a password input', () => {
    render(<WithProviders><Login /></WithProviders>);
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
  });

  it('shows a submit button', () => {
    render(<WithProviders><Login /></WithProviders>);
    expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument();
  });
});

