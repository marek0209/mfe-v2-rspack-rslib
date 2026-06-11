import { render, screen } from '@testing-library/react';
import { describe, expect, it } from '@rstest/core';
import { App1Header } from './App1Header';

describe('App1Header', () => {
  it('renders title', (): void => {
    render(<App1Header title="Dashboard" />);
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
  });
});
