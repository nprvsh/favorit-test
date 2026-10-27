import { plural } from '@/utils/plural';

const FORMS = {
  chars: ['символ', 'символа', 'символов'],
  brands: ['производитель', 'производителя', 'производителей'],
  items: ['позиция', 'позиции', 'позиций'],
  hiddenItems: ['позицию', 'позиции', 'позиций'],
  offers: ['предложение', 'предложения', 'предложений'],
};

export const TEXTS = {
  app: {
    title: 'Подбор автозапчастей',
    subtitle: 'Поиск по артикулу, аналоги и наличие на складах',
  },

  intro: [
    { icon: 'upc-scan', title: 'Введите артикул', text: 'Номер детали с упаковки или из каталога' },
    { icon: 'buildings', title: 'Выберите производителя', text: 'Под одним номером бывают разные детали' },
    { icon: 'arrow-left-right', title: 'Сравните аналоги', text: 'Цены, остатки и сроки отгрузки по складам' },
  ],

  search: {
    label: 'Артикул детали',
    placeholder: 'Введите номер детали',
    clear: 'Очистить',
    searching: 'Поиск…',
    hint: 'Поиск начнётся автоматически. Например:',
    moreChars: (count) => `Введите ещё ${plural(count, FORMS.chars)}`,
  },

  brands: {
    title: 'Шаг 1 · Производитель',
    found: (count) => plural(count, FORMS.brands),
    loading: 'Ищем производителей…',
    outOfStock: 'нет',
    notFoundTitle: 'Ничего не найдено',
    notFoundText: (query) =>
      `По артикулу «${query}» деталей нет. Проверьте номер: без пробелов, буква O и цифра 0 различаются.`,
  },

  offers: {
    title: 'Шаг 2 · Аналоги и предложения',
    summary: (total, inStock) => ` · ${plural(total, FORMS.items)}, в наличии ${inStock}`,
    loading: 'Загружаем аналоги и предложения…',
    selectTitle: 'Выберите производителя',
    selectText: 'Нажмите на производителя в списке, чтобы увидеть аналоги, цены и остатки на складах.',
    emptyTitle: 'Предложений не найдено',
    emptyText: (brand, number) => `По детали ${brand} ${number} сейчас нет ни предложений, ни аналогов.`,
    noAnalogues: 'Аналогов для этой детали не найдено.',
    onlyInStock: 'Только в наличии',
    showHidden: (count) => `Показать ещё ${plural(count, FORMS.hiddenItems)} без наличия`,
    showMore: (count, remaining) => `Показать ещё ${plural(count, FORMS.hiddenItems)} из ${remaining}`,
    original: 'Искомая деталь',
    analogue: 'Аналог',
    priceFrom: 'от ',
    inStock: (count) => `в наличии ${count} шт.`,
    outOfStock: 'Нет в наличии',
    showAll: (count) => `Показать все ${plural(count, FORMS.offers)}`,
    collapse: 'Свернуть',
    columns: { warehouse: 'Склад', shipment: 'Отгрузка', stock: 'Остаток', price: 'Цена' },
  },

  common: {
    loading: 'Загрузка…',
    pieces: (count) => `${count} шт.`,
    noValue: '—',
  },

  errors: {
    title: 'Не удалось загрузить данные',
    retry: 'Повторить',
    crashTitle: 'Что-то пошло не так',
    crashText: 'Произошла непредвиденная ошибка. Перезагрузите страницу.',
    reload: 'Перезагрузить',
    noConfig: (name) => `Не задана настройка ${name} в файле .env.`,
    network: 'Сбой сети: не удалось связаться с сервером.',
    timeout: 'Сервер не ответил вовремя. Попробуйте ещё раз.',
    badResponse: (status) => `Некорректный ответ сервера (HTTP ${status}).`,
    api: (message) => `Ошибка API: ${message}`,
    http: (status) => `Ошибка сервера (HTTP ${status}).`,
  },
};
