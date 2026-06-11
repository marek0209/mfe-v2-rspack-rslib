import { render, screen } from '@testing-library/react';
import { describe, expect, it } from '@rstest/core';
import '@testing-library/jest-dom';
import App2Shell from './App2Shell';

describe('App2Shell', () => {
  it('renders label', (): void => {
    render(<App2Shell label="Remote Shell" />);
    expect(screen.getByText('Remote Shell')).toBeInTheDocument();
  });
});
