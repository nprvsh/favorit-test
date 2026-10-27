import { SEARCH_INPUT_ID } from '@/constants/settings';
import { TEXTS } from '@/constants/texts';
import { useArticleSearch } from '@/hooks/useArticleSearch';
import { preventDefault } from '@/utils/dom';
import SearchInput from './SearchInput';
import SearchHint from './SearchHint';

const HINT_ID = 'number-hint';

export default function SearchForm() {
  const { value, inputRef, loading, hint, hasValue, setValue, clear, onChange, onKeyDown } = useArticleSearch();

  return (
    <form role="search" className="app-card p-3 p-md-4" onSubmit={preventDefault}>
      <label htmlFor={SEARCH_INPUT_ID} className="form-label fw-semibold">
        {TEXTS.search.label}
      </label>
      <SearchInput
        value={value}
        inputRef={inputRef}
        loading={loading}
        hasValue={hasValue}
        onChange={onChange}
        onKeyDown={onKeyDown}
        onClear={clear}
        describedBy={HINT_ID}
      />
      <SearchHint id={HINT_ID} text={hint} onPick={setValue} />
    </form>
  );
}
