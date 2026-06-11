import { render, screen } from '@testing-library/react';
import { describe, expect, it } from '@rstest/core';
import React from 'react';
import DataTableRemote from './DataTableRemote';

describe('DataTableRemote', () => {
  it('renders order rows', (): void => {
    render(<DataTableRemote title="Orders" />);

    expect(screen.getByText('Orders')).toBeInTheDocument();
    expect(screen.getByText('Order #1001')).toBeInTheDocument();
  });
});
