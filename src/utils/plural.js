const rules = new Intl.PluralRules('ru-RU');

export function plural(count, [one, few, many]) {
  const forms = { one, few, many, other: few };
  return `${count} ${forms[rules.select(count)]}`;
}
