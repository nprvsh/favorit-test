import { useResultsLayout } from '@/hooks/useResultsLayout';
import BrandList from '@/components/brands/BrandList';
import OffersPanel from '@/components/offers/OffersPanel';

export default function Results() {
  const { offersRef, hasBrands } = useResultsLayout();

  return (
    <div className="row g-4 mt-0">
      <div className="col-lg-4">
        <div className="sticky-lg">
          <BrandList />
        </div>
      </div>
      <div className="col-lg-8" ref={offersRef}>
        <OffersPanel showSelectHint={hasBrands} />
      </div>
    </div>
  );
}
