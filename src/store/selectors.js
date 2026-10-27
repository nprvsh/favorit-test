import { createSelector } from '@reduxjs/toolkit';
import { QueryStatus, skipToken } from '@reduxjs/toolkit/query';
import { favoritApi } from '@/api/favoritApi';
import { isInStock, sortItems } from '@/utils/offers';
import { isSearchable } from '@/utils/search';

export const EMPTY_LIST = [];

export const selectQuery = (state) => state.search.query;
export const selectSelected = (state) => state.search.selected;
export const selectOnlyInStock = (state) => state.search.onlyInStock;
export const selectRevision = (state) => state.search.revision;

export const selectSearchStarted = (state) => isSearchable(selectQuery(state));

export const selectBrandsArg = createSelector([selectQuery], (query) => (isSearchable(query) ? query : skipToken));

export const selectOffersArg = createSelector([selectSearchStarted, selectSelected], (started, selected) =>
  started && selected ? selected : skipToken,
);

const selectBrandsResult = createSelector([selectBrandsArg], (arg) => favoritApi.endpoints.getBrands.select(arg));
const selectOffersResult = createSelector([selectOffersArg], (arg) => favoritApi.endpoints.getOffers.select(arg));

export const selectBrandItems = (state) => selectBrandsResult(state)(state).data ?? EMPTY_LIST;
export const selectHasBrands = (state) => selectBrandItems(state).length > 0;
export const selectBrandsPending = (state) => selectBrandsResult(state)(state).status === QueryStatus.pending;

const selectOfferItems = (state) => selectOffersResult(state)(state).data ?? EMPTY_LIST;

export const selectOffersView = createSelector([selectOfferItems, selectOnlyInStock], (items, onlyInStock) => {
  const sorted = sortItems(items);
  const visible = sorted.filter((item) => !onlyInStock || item.isOriginal || isInStock(item));

  return {
    visible,
    total: items.length,
    inStockCount: items.filter(isInStock).length,
    hiddenCount: items.length - visible.length,
    hasNoAnalogues: items.length === 1,
  };
});
