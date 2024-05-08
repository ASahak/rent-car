import { useEffect } from 'react';

export const useMakeFixedBody = (toggle) => {
  useEffect(() => {
    document.body.classList[toggle ? 'add' : 'remove']('freeze-body');
  }, [toggle]);
}