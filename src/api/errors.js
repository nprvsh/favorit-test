import { TEXTS } from '@/constants/texts';

const MESSAGES = {
  FETCH_ERROR: () => TEXTS.errors.network,
  TIMEOUT_ERROR: () => TEXTS.errors.timeout,
  PARSING_ERROR: (error) => TEXTS.errors.badResponse(error.originalStatus),
  CUSTOM_ERROR: (error) => error.error,
};

export function toErrorMessage(error) {
  if (error.data?.error) return TEXTS.errors.api(error.data.error);
  const message = MESSAGES[error.status];
  if (message) return message(error);
  return TEXTS.errors.http(error.status);
}
