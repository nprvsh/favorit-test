import { useState } from 'react';

export function useIncrementalList(list, step) {
  const [limit, setLimit] = useState(step);
  const remaining = Math.max(list.length - limit, 0);

  return {
    items: list.slice(0, limit),
    remaining,
    nextCount: Math.min(step, remaining),
    showMore: () => setLimit((value) => value + step),
  };
}
