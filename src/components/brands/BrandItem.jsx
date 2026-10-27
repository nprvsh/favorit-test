import { memo } from 'react';
import { TEXTS } from '@/constants/texts';
import { cn } from '@/utils/cn';
import Icon from '@/components/common/Icon';
import StockBadge from '@/components/common/StockBadge';

const ACTIVE_ICON = { name: 'check-circle-fill', className: 'text-primary' };
const DEFAULT_ICON = { name: 'chevron-right', className: 'text-secondary' };

function BrandItem({ item, active, onSelect }) {
  const className = cn('brand-item', active && 'is-active');
  const icon = active ? ACTIVE_ICON : DEFAULT_ICON;

  return (
    <button type="button" className={className} aria-pressed={active} onClick={() => onSelect(item)}>
      <div className="flex-grow-1 min-w-0">
        <div className="fw-semibold">{item.brand}</div>
        <div className="small text-secondary text-truncate">
          <span className="font-monospace">{item.number}</span> · {item.name}
        </div>
      </div>
      <StockBadge count={item.count} emptyLabel={TEXTS.brands.outOfStock} />
      <Icon {...icon} />
    </button>
  );
}

export default memo(BrandItem);
