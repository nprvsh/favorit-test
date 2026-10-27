import Icon from './Icon';

export default function EmptyState({ icon, title, text }) {
  return (
    <div className="app-card empty-state text-center px-4 py-5">
      <Icon name={icon} />
      <h3 className="h6 mt-3 mb-1">{title}</h3>
      <p className="empty-state-text small text-secondary mx-auto mb-0">{text}</p>
    </div>
  );
}
