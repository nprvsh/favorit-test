import { SEARCH_MIN_LENGTH } from '@/constants/settings';

export const isSearchable = (query) => query.length >= SEARCH_MIN_LENGTH;

export const missingChars = (query) => Math.max(SEARCH_MIN_LENGTH - query.length, 0);
