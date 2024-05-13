import { useEffect } from 'react'

let subscribers = [];

const subscribe = (filter, callback) => {
  const filterIsNullish = filter === undefined || filter === null;
  const callbackIsNullish = callback === undefined || callback === null;
  if (filterIsNullish || callbackIsNullish) return undefined;

  subscribers = [
    ...subscribers,
    [filter, callback],
  ]

  return () => {
    subscribers = subscribers.filter((subscriber) => subscriber[1] !== callback)
  }
}

export const dispatch = (event) => {
  let { type } = event;
  const args = [];
  if (typeof event === 'string') {
    type = event;
    args.push({ type });
  } else args.push(event);

  subscribers.forEach(([filter, callback]) => {
    const filterIsString = typeof filter === 'string' && filter !== type;
    const filterIsFunc = typeof filter === 'function' && !filter(...args);
    if (filterIsString || filterIsFunc) return;

    callback(...args);
  });
}

const useBus = (type, callback, deps = []) => {
  useEffect(() => subscribe(type, callback), deps)

  return dispatch
}

export default useBus