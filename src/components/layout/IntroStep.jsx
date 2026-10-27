import Icon from '@/components/common/Icon';

export default function IntroStep({ index, icon, title, text }) {
  return (
    <div className="app-card h-100 p-3 d-flex gap-3">
      <span className="app-logo bg-primary-subtle text-primary flex-shrink-0">
        <Icon name={icon} />
      </span>
      <div>
        <div className="fw-semibold">
          {index}. {title}
        </div>
        <div className="small text-secondary">{text}</div>
      </div>
    </div>
  );
}
