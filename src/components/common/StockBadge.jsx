import { TEXTS } from '@/constants/texts';
import { cn } from '@/utils/cn';

const IN_STOCK_CLASS = 'bg-success-subtle text-success-emphasis';
const OUT_OF_STOCK_CLASS = 'text-bg-light text-secondary border';

export default function StockBadge({ count, emptyLabel }) {
  const inStock = count > 0;
  const className = cn('badge rounded-pill tabular', inStock ? IN_STOCK_CLASS : OUT_OF_STOCK_CLASS);
  const label = inStock ? TEXTS.common.pieces(count) : emptyLabel;

  return <span className={className}>{label}</span>;
}
