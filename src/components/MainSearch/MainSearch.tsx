import React, { useState, useCallback, useEffect, FormEvent } from "react";
import { useNavigate } from "react-router";
import { useSearchParams } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../hooks/redux";
import { addHistory } from "../../store/auth/authSlice";
import { selectFiltersState } from "../../store/filters/selectors";
import SuggestBox from "./SuggestBox/SuggestBox";
import { debounce, getFiltersQuery } from "../../utils/helpers";

import { MainSearchProps, Suggestions } from "./types";
import s from "./MainSearch.module.css";

const DEBOUNCE_MS = 500;
const SUGGESTIONS_LIMIT = 5;

function MainSearch({ getSuggestionsAsync }: MainSearchProps) {
  const [qS] = useSearchParams();
  const defSearch = qS.get("search") || "";
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [searchText, setSearchText] = useState<string>(defSearch);
  const [suggestions, setSuggestions] = useState<Suggestions>([]);
  const [showSug, setShowSug] = useState(true);
  const nav = useNavigate();
  const dispatch = useAppDispatch();
  const filters = useAppSelector(selectFiltersState);

  useEffect(() => {
    setShowSug(false);
    return () => {
      setIsFirstLoad(false);
    };
  }, []);

  useEffect(() => {
    searchText ? fetchSuggestionsDebounced(searchText) : setSuggestions([]);
  }, [searchText]);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const input = e.target.value;
      setSearchText(input);
    },
    [],
  );

  const fetchSuggestionsDebounced = useCallback(
    debounce(fetchSuggestions, DEBOUNCE_MS),
    [],
  );

  return (
    <div className={s.outer}>
      <div className={s.inner}>
        <form
          id="search-form"
          className={s.mainSearchForm}
          onSubmit={handleSubmit}
        >
          <input
            className={s.searchInput}
            value={searchText}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            onFocus={handleInputFocus}
            type="search"
          />
          <SuggestBox suggestions={suggestions} isVisible={showSug} />
        </form>
        <button
          className={s.searchBtn}
          form="search-form"
          onClick={handleSubmit}
          type="submit"
        />
      </div>
    </div>
  );

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    let url = `/cocktails?search=${searchText}`;
    url = url.concat("&", getFiltersQuery(filters));

    dispatch(
      addHistory({
        date: Date(),
        search: searchText ? `"${searchText}"` : "empty",
        url,
      }),
    );

    nav(url);
  }

  function handleInputBlur(e: React.FocusEvent) {
    if (e.relatedTarget?.tagName !== "A") {
      setShowSug(false);
    }
  }

  function handleInputFocus() {
    setShowSug(true);
  }

  function fetchSuggestions(search: string) {
    getSuggestionsAsync(search, SUGGESTIONS_LIMIT)
      .then((list) => {
        if (isFirstLoad) {
          setSuggestions(list);
        }
      })
      .catch(() => {
        if (isFirstLoad) {
          setSuggestions([]);
        }
      });
  }
}

export default MainSearch;
