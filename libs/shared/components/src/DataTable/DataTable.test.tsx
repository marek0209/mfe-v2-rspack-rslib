import { render, screen } from '@testing-library/react';
import { describe, expect, it } from '@rstest/core';
import React from 'react';
import { DataTable } from './DataTable';

describe('DataTable', () => {
  it('renders rows', (): void => {
    render(
      <DataTable
        title="Users"
        rows={[
          { id: '1', name: 'Alice', status: 'Active' },
          { id: '2', name: 'Bob', status: 'Inactive' },
        ]}
      />,
    );

    expect(screen.getByText('Users')).toBeInTheDocument();
    expect(screen.getByText('Alice')).toBeInTheDocument();
    expect(screen.getByText('Bob')).toBeInTheDocument();
  });
});
