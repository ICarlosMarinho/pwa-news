import { useState } from "react";

const useInitialState = (): AppState => {
  const [loading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState(false);
  const [headlines, setHeadlines] = useState(new Array<Article>());
  const [searchResults, setSearchResults] = useState(new Array<Article>());

  return {
    loading,
    setLoading,
    fetchError,
    setFetchError,
    headlines,
    setHeadlines,
    searchResults,
    setSearchResults,
  };
};

export default useInitialState;
