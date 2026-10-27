import { cn } from '@/utils/cn';

export default function Icon({ name, className }) {
  return <i className={cn('bi', `bi-${name}`, className)} aria-hidden="true" />;
}
