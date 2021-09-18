interface Article {
  author: string | null;
  content: string;
  description: string;
  publishedAt: string;
  source: { id: string | null; name: string };
  title: string;
  url: string;
  urlToImage: string;
}

interface HeadlinesResponseData {
  status: string;
  articles: Article[];
  totalResults: number;
}

interface AppState {
  loading: boolean;
  setLoading: (loading: boolean) => void;
  fetchError: boolean;
  setFetchError: (fetchError: boolean) => void;
  articles: Article[];
  setArticles: (articles: Article[]) => void;
}

interface ThemeContext {
  colors: {
    text: string;
    background: string;
    primary: string;
    secondary: string;
  };
}