import { useState, useEffect } from 'react';

function useLocalStorageState(key, defaultVal) {
  // make a pice of state, based off of value in localstorage (or default)
  const [state, setState] = useState(() => {
    let val;
    try {
      val = JSON.parse(window.localStorage.getItem(key)) || String(defaultVal);
    } catch (e) {
      val = defaultVal;
    }
    return val;
  });
  //us useffect to update localstorage when state changes
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);
  return [state, setState];
}

export default useLocalStorageState;
