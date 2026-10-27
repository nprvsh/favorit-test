import { TEXTS } from '@/constants/texts';
import { formatPrice } from '@/utils/format';
import Icon from '@/components/common/Icon';
import StockBadge from '@/components/common/StockBadge';

export default function OfferSummary({ bestPrice, count }) {
  if (bestPrice === undefined) {
    return <StockBadge count={0} emptyLabel={TEXTS.offers.outOfStock} />;
  }

  return (
    <div className="text-sm-end tabular">
      <div className="fs-5 fw-semibold lh-sm">
        <span className="small fw-normal text-secondary">{TEXTS.offers.priceFrom}</span>
        {formatPrice(bestPrice)}
      </div>
      <div className="small text-success">
        <Icon name="box-seam" className="me-1" />
        {TEXTS.offers.inStock(count)}
      </div>
    </div>
  );
}
