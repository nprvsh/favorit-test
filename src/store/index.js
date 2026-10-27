import { configureStore } from '@reduxjs/toolkit';
import { favoritApi } from '@/api/favoritApi';
import { readSearchParams } from '@/utils/url';
import search, { searchInitialState } from './searchSlice';

export function createAppStore(searchString = '') {
  return configureStore({
    reducer: {
      search,
      [favoritApi.reducerPath]: favoritApi.reducer,
    },
    middleware: (getDefault) => getDefault().concat(favoritApi.middleware),
    preloadedState: {
      search: { ...searchInitialState, ...readSearchParams(searchString) },
    },
  });
}
