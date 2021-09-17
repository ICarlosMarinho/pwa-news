import { createContext } from "react";

const AppContext = createContext<AppState>({
  loading: false,
  setLoading: (loading: boolean) => null,
  fetchError: false,
  setFetchError: (fetchError: boolean) => null,
  articles: new Array<Article>(),
  setArticles: (articles: Article[]) => null,
});

export default AppContext;
