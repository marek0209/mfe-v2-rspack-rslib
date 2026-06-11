import { useCallback, useState } from 'react';

export interface UseToggleResult {
  isOn: boolean;
  toggle: () => void;
}

export function useToggle(initialState = false): UseToggleResult {
  const [isOn, setIsOn] = useState<boolean>(initialState);

  const toggle = useCallback((): void => {
    setIsOn((previous) => !previous);
  }, []);

  return { isOn, toggle };
}
