import { TEXTS } from '@/constants/texts';
import { cn } from '@/utils/cn';
import { formatDate, formatPrice } from '@/utils/format';

export default function OfferRow({ offer, isBest }) {
  const warehouse = offer.code || TEXTS.common.noValue;
  const priceClass = cn('text-end text-nowrap', isBest && 'fw-semibold text-success');

  return (
    <tr>
      <td className="text-nowrap">{warehouse}</td>
      <td className="text-nowrap text-secondary">{formatDate(offer.shipmentDate)}</td>
      <td className="text-end text-nowrap">{TEXTS.common.pieces(offer.stock)}</td>
      <td className={priceClass}>{formatPrice(offer.price)}</td>
    </tr>
  );
}
