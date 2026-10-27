import { Component } from 'react';
import { TEXTS } from '@/constants/texts';
import ErrorAlert from './ErrorAlert';

const reload = () => window.location.reload();

export default class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error(error, info.componentStack);
  }

  render() {
    if (!this.state.hasError) return this.props.children;

    return (
      <ErrorAlert
        title={TEXTS.errors.crashTitle}
        message={TEXTS.errors.crashText}
        actionLabel={TEXTS.errors.reload}
        onRetry={reload}
      />
    );
  }
}
