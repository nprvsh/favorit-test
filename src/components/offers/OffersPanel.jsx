import { TEXTS } from '@/constants/texts';
import { useOffersQuery } from '@/hooks/useOffersQuery';
import AsyncView from '@/components/common/AsyncView';
import Loader from '@/components/common/Loader';
import EmptyState from '@/components/common/EmptyState';
import OffersResults from './OffersResults';

export default function OffersPanel({ showSelectHint }) {
  const { selected, state, isEmpty } = useOffersQuery();

  const idle = showSelectHint && (
    <EmptyState icon="hand-index" title={TEXTS.offers.selectTitle} text={TEXTS.offers.selectText} />
  );
  const loading = <Loader text={TEXTS.offers.loading} rows={3} height="9rem" />;
  const empty = selected && (
    <EmptyState
      icon="inbox"
      title={TEXTS.offers.emptyTitle}
      text={TEXTS.offers.emptyText(selected.brand, selected.number)}
    />
  );

  return (
    <AsyncView state={state} idle={idle} loading={loading} isEmpty={isEmpty} empty={empty}>
      <OffersResults />
    </AsyncView>
  );
}
