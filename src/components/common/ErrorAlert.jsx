import { TEXTS } from '@/constants/texts';
import Icon from './Icon';

export default function ErrorAlert({
  title = TEXTS.errors.title,
  message,
  actionLabel = TEXTS.errors.retry,
  actionIcon = 'arrow-clockwise',
  onRetry,
}) {
  return (
    <div className="alert alert-danger d-flex align-items-start gap-2" role="alert">
      <Icon name="exclamation-triangle-fill" className="mt-1" />
      <div className="flex-grow-1">
        <div className="fw-semibold">{title}</div>
        <div className="small">{message}</div>
      </div>
      <button type="button" className="btn btn-sm btn-outline-danger text-nowrap" onClick={onRetry}>
        <Icon name={actionIcon} className="me-1" />
        {actionLabel}
      </button>
    </div>
  );
}
