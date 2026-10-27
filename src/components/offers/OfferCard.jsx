import { memo } from 'react';
import { VISIBLE_OFFERS } from '@/constants/settings';
import { useExpandableList } from '@/hooks/useExpandableList';
import { cn } from '@/utils/cn';
import OfferTitle from './OfferTitle';
import OfferSummary from './OfferSummary';
import OffersTable from './OffersTable';
import ExpandButton from './ExpandButton';

function OfferCard({ item }) {
  const { offers } = item;
  const { expanded, visible, canExpand, toggle } = useExpandableList(offers, VISIBLE_OFFERS);
  const hasOffers = offers.length > 0;
  const className = cn('app-card offer-card', item.isOriginal && 'is-original', !hasOffers && 'is-muted');

  return (
    <article className={className}>
      <div className="d-flex flex-wrap justify-content-between align-items-start gap-2 p-3">
        <OfferTitle item={item} />
        <OfferSummary bestPrice={offers[0]?.price} count={item.count} />
      </div>
      {hasOffers && <OffersTable offers={visible} />}
      {canExpand && <ExpandButton expanded={expanded} total={offers.length} onToggle={toggle} />}
    </article>
  );
}

export default memo(OfferCard);
