import { TEXTS } from '@/constants/texts';
import { useOffersView } from '@/hooks/useOffersView';
import Section from '@/components/common/Section';
import InStockSwitch from './InStockSwitch';
import OfferCard from './OfferCard';
import OffersFooter from './OffersFooter';

const TITLE_ID = 'offers-title';

export default function OffersResults() {
  const { selected, total, inStockCount, hiddenCount, hasNoAnalogues, items, remaining, nextCount, showMore } =
    useOffersView();

  const subtitle = (
    <>
      <span className="fw-semibold text-body">
        {selected.brand} {selected.number}
      </span>
      {TEXTS.offers.summary(total, inStockCount)}
    </>
  );

  return (
    <Section id={TITLE_ID} title={TEXTS.offers.title} subtitle={subtitle} aside={<InStockSwitch />}>
      <div className="d-grid gap-3">
        {items.map((item) => (
          <OfferCard key={item.goodsID} item={item} />
        ))}
        <OffersFooter
          remaining={remaining}
          nextCount={nextCount}
          onShowMore={showMore}
          hiddenCount={hiddenCount}
          hasNoAnalogues={hasNoAnalogues}
        />
      </div>
    </Section>
  );
}
