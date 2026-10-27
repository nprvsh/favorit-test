import { SEARCH_EXAMPLES } from '@/constants/settings';

export default function SearchHint({ id, text, onPick }) {
  return (
    <div id={id} className="d-flex flex-wrap align-items-center gap-2 mt-2 small text-secondary">
      <span>{text}</span>
      {SEARCH_EXAMPLES.map((example) => (
        <button
          key={example}
          type="button"
          className="btn btn-sm btn-light border rounded-pill py-0 font-monospace"
          onClick={() => onPick(example)}
        >
          {example}
        </button>
      ))}
    </div>
  );
}
