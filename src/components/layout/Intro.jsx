import { TEXTS } from '@/constants/texts';
import IntroStep from './IntroStep';

export default function Intro() {
  return (
    <div className="row g-3 mt-0">
      {TEXTS.intro.map((step, i) => (
        <div key={step.title} className="col-md-4">
          <IntroStep index={i + 1} {...step} />
        </div>
      ))}
    </div>
  );
}
