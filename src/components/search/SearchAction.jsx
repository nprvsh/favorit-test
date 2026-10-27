import { TEXTS } from '@/constants/texts';
import Icon from '@/components/common/Icon';

export default function SearchAction({ loading, hasValue, onClear }) {
  if (loading) {
    return (
      <span className="spinner-border spinner-border-sm text-primary" role="status">
        <span className="visually-hidden">{TEXTS.search.searching}</span>
      </span>
    );
  }
  if (!hasValue) return null;

  return (
    <button
      type="button"
      className="btn btn-sm btn-link text-secondary p-1"
      onClick={onClear}
      aria-label={TEXTS.search.clear}
    >
      <Icon name="x-circle-fill" />
    </button>
  );
}
