export const isInStock = (item) => item.count > 0;

const byPrice = (a, b) => a.price - b.price;
const bestPrice = (item) => item.offers[0]?.price ?? Infinity;
const inStockFirst = (a, b) => isInStock(b) - isInStock(a);
const originalFirst = (a, b) => Boolean(b.isOriginal) - Boolean(a.isOriginal);

export const withOffers = (item) => ({ ...item, offers: [...(item.warehouses || [])].sort(byPrice) });

export const sortItems = (items) =>
  [...items].sort((a, b) => originalFirst(a, b) || inStockFirst(a, b) || bestPrice(a) - bestPrice(b));

export const sortBrands = (brands) =>
  [...brands].sort((a, b) => inStockFirst(a, b) || a.brand.localeCompare(b.brand, 'ru'));

export const isSameBrand = (a, b) => Boolean(a && b) && a.brand === b.brand && a.number === b.number;
