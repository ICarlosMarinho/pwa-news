import { actionTypes } from "../actions";

const reducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case actionTypes.SET_SCROLL:
      return { ...state, scroll: action.payload as number };
    case actionTypes.SET_LOADING:
      return { ...state, loading: action.payload as boolean };
    case actionTypes.SET_FETCH_ERROR:
      return { ...state, fetchError: action.payload as boolean };
    case actionTypes.SET_SEARCH_RESULTS:
      return {
        ...state,
        searchResults: [
          ...state.searchResults,
          ...(action.payload as Article[]),
        ],
      };
    case actionTypes.CLEAR_SEARCH_RESULTS:
      return { ...state, searchResults: action.payload };
    case actionTypes.SET_HEADLINES:
      return {
        ...state,
        headlines: [...state.headlines, ...(action.payload as Article[])],
      };
    default:
      return state;
  }
};

export default reducer;
