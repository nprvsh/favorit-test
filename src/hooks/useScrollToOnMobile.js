import { useEffect } from 'react';
import { MOBILE_MEDIA_QUERY } from '@/constants/settings';

export function useScrollToOnMobile(ref, trigger) {
  useEffect(() => {
    if (!trigger || !window.matchMedia(MOBILE_MEDIA_QUERY).matches) return;
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  }, [ref, trigger]);
}
