import { TEXTS } from '@/constants/texts';

export default function Loader({ text = TEXTS.common.loading, rows = 3, height }) {
  const placeholders = Array.from({ length: rows }, (_, i) => i);

  return (
    <div role="status" aria-live="polite">
      <div className="d-flex align-items-center gap-2 small text-secondary mb-2">
        <span className="spinner-border spinner-border-sm" aria-hidden="true" />
        {text}
      </div>
      <div className="d-grid gap-2 placeholder-glow" aria-hidden="true">
        {placeholders.map((i) => (
          <span key={i} className="placeholder skeleton bg-secondary-subtle" style={{ height }} />
        ))}
      </div>
    </div>
  );
}
