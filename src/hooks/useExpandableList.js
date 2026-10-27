import { useState } from 'react';

export function useExpandableList(list, limit) {
  const [expanded, setExpanded] = useState(false);

  return {
    expanded,
    visible: expanded ? list : list.slice(0, limit),
    canExpand: list.length > limit,
    toggle: () => setExpanded((value) => !value),
  };
}
