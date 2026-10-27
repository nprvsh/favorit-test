import { SCROLL_TOP_OFFSET } from '@/constants/settings';
import { TEXTS } from '@/constants/texts';
import { useScrolledPast } from '@/hooks/useScrolledPast';
import Icon from './Icon';

const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

export default function ScrollTopButton() {
  const visible = useScrolledPast(SCROLL_TOP_OFFSET);

  if (!visible) return null;

  return (
    <button
      type="button"
      className="btn btn-primary rounded-circle scroll-top d-lg-none"
      aria-label={TEXTS.common.scrollTop}
      title={TEXTS.common.scrollTop}
      onClick={scrollToTop}
    >
      <Icon name="arrow-up" />
    </button>
  );
}
