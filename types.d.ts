// import { Reducer } from "react";

interface Article {
  id?: string;
  author: string | null;
  content: string;
  description: string;
  publishedAt: string;
  source: { id: string | null; name: string };
  title: string;
  url: string;
  urlToImage: string;
}

interface ArticlesResponseData {
  status: string;
  articles: Article[];
  totalResults: number;
}

interface AppState {
  scroll: number;
  loading: boolean;
  fetchError: boolean;
  searchKey: string;
  searchPage: number;
  searchResults: Article[];
  headlines: Article[];
}

interface Action {
  type: string;
  payload: boolean | number | string | Article[];
}

interface Context {
  state: AppState;
  dispatch: any;
}

interface ThemeContext {
  colors: {
    text: string;
    background: string;
    primary: string;
    secondary: string;
  };
}
