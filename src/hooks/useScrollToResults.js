import { useEffect } from 'react';
import { MOBILE_MEDIA_QUERY } from '@/constants/settings';

export function useScrollToResults(ref, trigger) {
  useEffect(() => {
    const element = ref.current;
    if (!trigger || !element) return;

    const isMobile = window.matchMedia(MOBILE_MEDIA_QUERY).matches;
    if (!isMobile && element.getBoundingClientRect().top >= 0) return;

    element.scrollIntoView({ behavior: 'smooth' });
  }, [ref, trigger]);
}
