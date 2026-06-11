import { act, renderHook } from '@testing-library/react';
import { describe, expect, it } from '@rstest/core';
import { useToggle } from './useToggle';

describe('useToggle', () => {
  it('toggles state', (): void => {
    const { result } = renderHook(() => useToggle(false));

    expect(result.current.isOn).toBe(false);

    act(() => {
      result.current.toggle();
    });

    expect(result.current.isOn).toBe(true);
  });
});
