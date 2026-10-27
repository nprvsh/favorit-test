import { SEARCH_INPUT_ID } from '@/constants/settings';
import { TEXTS } from '@/constants/texts';
import Icon from '@/components/common/Icon';
import SearchAction from './SearchAction';

export default function SearchInput({ value, inputRef, loading, hasValue, onChange, onKeyDown, onClear, describedBy }) {
  return (
    <div className="search-field">
      <Icon name="search" className="search-icon" />
      <input
        id={SEARCH_INPUT_ID}
        ref={inputRef}
        className="form-control form-control-lg"
        placeholder={TEXTS.search.placeholder}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        aria-describedby={describedBy}
        autoComplete="off"
        spellCheck="false"
        autoFocus
      />
      <div className="search-action">
        <SearchAction loading={loading} hasValue={hasValue} onClear={onClear} />
      </div>
    </div>
  );
}
