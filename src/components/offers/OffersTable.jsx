import { TEXTS } from '@/constants/texts';
import OfferRow from './OfferRow';

const { columns } = TEXTS.offers;

export default function OffersTable({ offers }) {
  return (
    <div className="table-responsive">
      <table className="table table-sm table-hover align-middle mb-0 offer-table tabular">
        <thead>
          <tr>
            <th scope="col">{columns.warehouse}</th>
            <th scope="col">{columns.shipment}</th>
            <th scope="col" className="text-end">
              {columns.stock}
            </th>
            <th scope="col" className="text-end">
              {columns.price}
            </th>
          </tr>
        </thead>
        <tbody>
          {offers.map((offer, i) => (
            <OfferRow key={offer.id} offer={offer} isBest={i === 0} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
