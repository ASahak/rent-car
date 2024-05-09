import { useEffect } from 'react';

export const useMakeFixedBody = (toggle) => {
  useEffect(() => {
    document.body.classList[toggle ? 'add' : 'remove']('freeze-body');
    if(toggle) {
      window.scrollTo(0, 1)
    }
  }, [toggle]);
}