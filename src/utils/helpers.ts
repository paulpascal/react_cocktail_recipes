import { SearchQuery } from "../hooks/useQuery/types";
import { InitialState as FiltersState } from "../store/filters/types";
import { axiosCocktailApi } from "../services/cocktailApi";
import {
  CocktailPromise,
  GetDefSelectBy,
  GetDefMultiSelect,
  SelOption,
} from "./types";
import { Cocktail } from "../store/cocktails/types";

type F = (...args: any[]) => any;

export function debounce(fn: F, ms: number) {
  let timeout: ReturnType<typeof setTimeout>;
  return function debouncedFn(...args: Parameters<F>) {
    const fnCall = () => {
      fn.apply(null, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(fnCall, ms);
  };
}

export function getCocktailUrl(id: string): string {
  return `/cocktails/${id}`;
}

export function getSelectOptions(arr: string[]): SelOption[] {
  return arr
    .sort((a, b) => a.localeCompare(b))
    .map((v) => ({ value: v, label: v }));
}

export function getFiltersQuery({ filter, filtBy }: FiltersState): string {
  if (filter.length === 0) return "";

  let qP = new URLSearchParams();
  qP.set(filtBy, filter.join());

  return qP.toString();
}

export function getPromiseArr(sQ: SearchQuery): CocktailPromise[] {
  const arr: CocktailPromise[] = [];
  const { filter, filtBy } = sQ;

  filter?.forEach((f) => {
    const p: CocktailPromise = axiosCocktailApi
      .get(`/filter.php?${filtBy}=${f}`)
      .then((res) => res.data?.drinks || []);
    arr.push(p);
  });

  return arr;
}

export const getDefSelectBy: GetDefSelectBy = (ops, val) => {
  if (!val) return;

  let def;

  for (let i = 0; i < ops.length; i++) {
    const elem = ops[i];
    if (elem.value === val) {
      def = elem;
      break;
    }
  }
  return def;
};

export const getDefMultiSelect: GetDefMultiSelect = (filter) => {
  if (!filter.length) return;

  return filter.map((f) => ({ value: f, label: f }));
};

export function getIngr(c: Cocktail): string[] {
  const MAX_INGR = 15;
  const res = [];

  for (let i = 0; i < MAX_INGR; i++) {
    const key = ("strIngredient" + i) as keyof Cocktail;
    const ingr = c[key];
    if (ingr) {
      res.push(ingr);
    }
  }

  return res;
}
