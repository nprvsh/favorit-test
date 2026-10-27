import { TEXTS } from '@/constants/texts';
import Icon from '@/components/common/Icon';

export default function AppHeader() {
  return (
    <header className="bg-white border-bottom">
      <div className="container d-flex align-items-center gap-3 py-3">
        <span className="app-logo">
          <Icon name="gear-wide-connected" />
        </span>
        <div>
          <h1 className="h5 mb-0">{TEXTS.app.title}</h1>
          <div className="small text-secondary">{TEXTS.app.subtitle}</div>
        </div>
      </div>
    </header>
  );
}
