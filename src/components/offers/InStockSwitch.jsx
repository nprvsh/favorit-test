import { TEXTS } from '@/constants/texts';
import { useInStockFilter } from '@/hooks/useInStockFilter';

const SWITCH_ID = 'only-in-stock';

export default function InStockSwitch() {
  const { onlyInStock, change } = useInStockFilter();

  return (
    <div className="form-check form-switch mb-0">
      <input
        id={SWITCH_ID}
        className="form-check-input"
        type="checkbox"
        role="switch"
        checked={onlyInStock}
        onChange={(event) => change(event.target.checked)}
      />
      <label className="form-check-label small" htmlFor={SWITCH_ID}>
        {TEXTS.offers.onlyInStock}
      </label>
    </div>
  );
}
