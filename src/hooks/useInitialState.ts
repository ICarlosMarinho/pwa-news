import { useState } from "react";

const useInitialState = (): AppState => {
  const [loading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState(false);
  const [articles, setArticles] = useState(new Array<Article>());

  return {
    loading,
    setLoading,
    fetchError,
    setFetchError,
    articles,
    setArticles,
  };
};

export default useInitialState;
