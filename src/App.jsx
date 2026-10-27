import { useSelector } from 'react-redux';
import { selectRevision, selectSearchStarted } from '@/store/selectors';
import { useUrlSync } from '@/hooks/useUrlSync';
import ErrorBoundary from '@/components/common/ErrorBoundary';
import AppHeader from '@/components/layout/AppHeader';
import Intro from '@/components/layout/Intro';
import Results from '@/components/layout/Results';
import SearchForm from '@/components/search/SearchForm';

export default function App() {
  useUrlSync();
  const started = useSelector(selectSearchStarted);
  const revision = useSelector(selectRevision);
  const content = started ? <Results /> : <Intro />;

  return (
    <>
      <AppHeader />
      <main className="container py-4">
        <ErrorBoundary>
          <SearchForm key={revision} />
          {content}
        </ErrorBoundary>
      </main>
    </>
  );
}
