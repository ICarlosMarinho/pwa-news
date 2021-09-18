import { createContext } from "react";

const AppContext = createContext<AppState>({
  loading: false,
  setLoading: (loading: boolean) => null,
  fetchError: false,
  setFetchError: (fetchError: boolean) => null,
  headlines: new Array<Article>(),
  setHeadlines: (articles: Article[]) => null,
  searchResults: new Array<Article>(),
  setSearchResults: (articles: Article[]) => null,
});

export default AppContext;
