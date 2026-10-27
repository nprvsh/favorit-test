import { TEXTS } from '@/constants/texts';
import Icon from '@/components/common/Icon';

export default function ExpandButton({ expanded, total, onToggle }) {
  const label = expanded ? TEXTS.offers.collapse : TEXTS.offers.showAll(total);
  const icon = expanded ? 'chevron-up' : 'chevron-down';

  return (
    <button
      type="button"
      className="btn btn-link btn-sm w-100 border-top rounded-0 text-decoration-none"
      aria-expanded={expanded}
      onClick={onToggle}
    >
      {label}
      <Icon name={icon} className="ms-1" />
    </button>
  );
}
