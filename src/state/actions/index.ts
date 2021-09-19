export const actionTypes = {
  SET_SCROLL: "SET_SCROLL",
  SET_LOADING: "SET_LOADING",
  SET_FETCH_ERROR: "SET_FETCH_ERROR",
  SET_SEARCH_KEY: "SET_SEARCH_KEY",
  SET_SEARCH_PAGE: "SET_SEARCH_PAGE",
  SET_SEARCH_RESULTS: "SET_SEARCH_RESULTS",
  SET_HEADLINES: "SET_HEADLINES",
};

export const setScroll = (scroll: number): Action => {
  return {
    type: actionTypes.SET_SCROLL,
    payload: scroll,
  };
};

export const setLoading = (loading: boolean): Action => {
  return {
    type: actionTypes.SET_LOADING,
    payload: loading,
  };
};

export const setFetchError = (fetchError: boolean): Action => {
  return {
    type: actionTypes.SET_FETCH_ERROR,
    payload: fetchError,
  };
};

export const setSearchKey = (searchKey: string): Action => {
  return {
    type: actionTypes.SET_SEARCH_KEY,
    payload: searchKey,
  };
};

export const setSearchPage = (searchPage: number): Action => {
  return {
    type: actionTypes.SET_SEARCH_PAGE,
    payload: searchPage,
  };
};

export const setSearchResults = (articles: Article[]): Action => {
  return {
    type: actionTypes.SET_SEARCH_RESULTS,
    payload: articles,
  };
};

export const setHeadlines = (articles: Article[]): Action => {
  return {
    type: actionTypes.SET_HEADLINES,
    payload: articles,
  };
};
