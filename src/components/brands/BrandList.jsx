import { TEXTS } from '@/constants/texts';
import { useBrands } from '@/hooks/useBrands';
import { isSameBrand } from '@/utils/offers';
import AsyncView from '@/components/common/AsyncView';
import Loader from '@/components/common/Loader';
import EmptyState from '@/components/common/EmptyState';
import Section from '@/components/common/Section';
import BrandItem from './BrandItem';

const TITLE_ID = 'brands-title';

export default function BrandList() {
  const { query, selected, items, state, select } = useBrands();
  const loading = <Loader text={TEXTS.brands.loading} rows={4} />;
  const empty = <EmptyState icon="search" title={TEXTS.brands.notFoundTitle} text={TEXTS.brands.notFoundText(query)} />;
  const found = <span className="small text-secondary">{TEXTS.brands.found(items.length)}</span>;

  return (
    <AsyncView state={state} loading={loading} isEmpty={items.length === 0} empty={empty}>
      <Section id={TITLE_ID} title={TEXTS.brands.title} aside={found}>
        <div className="d-grid gap-2">
          {items.map((item) => (
            <BrandItem
              key={`${item.brand}|${item.number}`}
              item={item}
              active={isSameBrand(item, selected)}
              onSelect={select}
            />
          ))}
        </div>
      </Section>
    </AsyncView>
  );
}
