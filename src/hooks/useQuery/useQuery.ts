import { useSearchParams } from "react-router-dom";
import { FILTERS } from "../../store/filters/filtersSlice";
import { Query, SearchQuery } from "./types";

function useQuery() {
  let [searchParams] = useSearchParams();

  // Returns the QS as an obj
  function getQuery(): Query {
    const q: Query = {};

    searchParams.forEach((v, key) => {
      q[key] = v.split(",");
    });

    return q;
  }

  // If QS has a filter, returns it along with the search
  function getSearchQuery(): SearchQuery {
    const q = getQuery();
    const search = q.search ? q.search.toString() : "";
    const sQ: SearchQuery = { search, filtBy: "" };

    FILTERS.some((f) => {
      if (f in q) {
        sQ.filtBy = f;
        sQ.filter = q[f];
        return true;
      }
    });

    return sQ;
  }

  return { getQuery, getSearchQuery, searchParams };
}

export default useQuery;
