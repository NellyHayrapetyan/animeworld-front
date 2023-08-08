import {useEffect, useState} from 'react'

export function useDebounce() {
  const [timer, setTimer] = useState();

  useEffect(() => {
    return () => clearTimeout(timer);
  }, [timer]);

  return (func, timeout) => (...arg) => {

    const t = setTimeout(() => {
      return func(...arg);
    }, timeout);
    setTimer(t);
  };
}