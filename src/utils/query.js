import { skipToken } from '@reduxjs/toolkit/query';

export const toAsyncState = (arg, { isFetching, isError, error, refetch }) => ({
  isIdle: arg === skipToken,
  isLoading: isFetching,
  error: isError ? error : null,
  retry: refetch,
});
