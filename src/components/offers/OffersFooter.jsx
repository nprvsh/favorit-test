import { TEXTS } from '@/constants/texts';
import { useInStockFilter } from '@/hooks/useInStockFilter';

const BUTTON_CLASS = 'btn btn-outline-secondary btn-sm';

export default function OffersFooter({ remaining, nextCount, onShowMore, hiddenCount, hasNoAnalogues }) {
  const { showAll } = useInStockFilter();

  if (remaining > 0) {
    return (
      <button type="button" className={BUTTON_CLASS} onClick={onShowMore}>
        {TEXTS.offers.showMore(nextCount, remaining)}
      </button>
    );
  }

  return (
    <>
      {hasNoAnalogues && <div className="small text-secondary text-center">{TEXTS.offers.noAnalogues}</div>}
      {hiddenCount > 0 && (
        <button type="button" className={BUTTON_CLASS} onClick={showAll}>
          {TEXTS.offers.showHidden(hiddenCount)}
        </button>
      )}
    </>
  );
}
