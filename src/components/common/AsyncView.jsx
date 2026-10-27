import ErrorAlert from './ErrorAlert';

export default function AsyncView({ state, idle = null, loading, isEmpty, empty, children }) {
  if (state.isIdle) return idle;
  if (state.isLoading) return loading;
  if (state.error) return <ErrorAlert message={state.error} onRetry={state.retry} />;
  if (isEmpty) return empty;
  return children;
}
