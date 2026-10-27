import { TEXTS } from '@/constants/texts';
import { cn } from '@/utils/cn';

const ORIGINAL_BADGE = { label: TEXTS.offers.original, className: 'text-bg-primary' };
const ANALOGUE_BADGE = { label: TEXTS.offers.analogue, className: 'bg-secondary-subtle text-secondary-emphasis' };

export default function OfferTitle({ item }) {
  const badge = item.isOriginal ? ORIGINAL_BADGE : ANALOGUE_BADGE;

  return (
    <div className="min-w-0">
      <span className={cn('badge rounded-pill mb-2', badge.className)}>{badge.label}</span>
      <div className="d-flex flex-wrap align-items-baseline gap-2">
        <span className="fw-semibold">{item.brand}</span>
        <span className="font-monospace small text-secondary">{item.number}</span>
      </div>
      <div className="small text-secondary mt-1">{item.name}</div>
    </div>
  );
}
