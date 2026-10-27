import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_TIMEOUT_MS } from '@/constants/settings';
import { TEXTS } from '@/constants/texts';
import { sortBrands, withOffers } from '@/utils/offers';
import { toErrorMessage } from './errors';

const EMPTY_ID = '00000000-0000-0000-0000-000000000000';

export const isRealItem = (item) => Boolean(item) && item.goodsID !== EMPTY_ID && Boolean(item.brand);

const parseGoods = (data) => (data?.goods ?? []).filter(isRealItem);

const toBrand = ({ brand, number, name, count }) => ({ brand, number, name, count });

const withAnalogues = ({ analogues = [], ...item }) => [{ ...item, isOriginal: true }, ...analogues.filter(isRealItem)];

const rawBaseQuery = fetchBaseQuery({
  timeout: API_TIMEOUT_MS,
  validateStatus: (response, body) => response.ok && !body?.error,
});

const configError = (name) => ({ error: { status: 'CUSTOM_ERROR', error: TEXTS.errors.noConfig(name) } });

const baseQuery = (params, api, extraOptions) => {
  const { VITE_FAVORIT_API_URL: url, VITE_FAVORIT_KEY: key } = import.meta.env;
  if (!url) return configError('VITE_FAVORIT_API_URL');
  if (!key) return configError('VITE_FAVORIT_KEY');
  return rawBaseQuery({ url, params: { key, ...params } }, api, extraOptions);
};

export const favoritApi = createApi({
  reducerPath: 'favoritApi',
  baseQuery,
  endpoints: (build) => ({
    getBrands: build.query({
      query: (number) => ({ number }),
      transformResponse: (data) => sortBrands(parseGoods(data).map(toBrand)),
      transformErrorResponse: toErrorMessage,
    }),
    getOffers: build.query({
      query: ({ number, brand }) => ({ number, brand, analogues: 'on' }),
      transformResponse: (data) => parseGoods(data).flatMap(withAnalogues).map(withOffers),
      transformErrorResponse: toErrorMessage,
    }),
  }),
});

export const { useGetBrandsQuery, useGetOffersQuery } = favoritApi;
