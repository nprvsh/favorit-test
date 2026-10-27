import { createSlice } from '@reduxjs/toolkit';

export const searchInitialState = { query: '', selected: null, onlyInStock: true, revision: 0 };

const searchSlice = createSlice({
  name: 'search',
  initialState: searchInitialState,
  reducers: {
    setQuery: (state, { payload }) => {
      if (state.query === payload) return;
      state.query = payload;
      state.selected = null;
    },
    selectBrand: (state, { payload }) => {
      state.selected = payload;
    },
    setOnlyInStock: (state, { payload }) => {
      state.onlyInStock = payload;
    },
    hydrate: (state, { payload }) => {
      state.query = payload.query;
      state.selected = payload.selected;
      state.revision += 1;
    },
  },
});

export const { setQuery, selectBrand, setOnlyInStock, hydrate } = searchSlice.actions;
export default searchSlice.reducer;
