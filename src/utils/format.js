import { TEXTS } from '@/constants/texts';

const money = new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB' });
const shortDate = new Intl.DateTimeFormat('ru-RU', { weekday: 'short', day: 'numeric', month: 'short' });

export const formatPrice = (value) => money.format(value);

export const formatDate = (value) => (value ? shortDate.format(new Date(value)) : TEXTS.common.noValue);
