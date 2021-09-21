import { FC, useEffect, useReducer } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "./GlobalStyle";
import Routes from "./routes";
import theme from "./theme";
import Header from "./components/Header";
import reducer from "./state/reducer";
import AppContext from "./state";
import { debounce } from "./utils";
import { setScroll } from "./state/actions";
import ErrorBoundary from "./components/ErrorBoundary";

const App: FC = () => {
  const intialState: AppState = {
    scroll: 0,
    loading: false,
    fetchError: false,
    searchResults: new Array<Article>(),
    headlines: new Array<Article>(),
  };
  const [state, dispatch] = useReducer(reducer, intialState);

  useEffect(() => {
    const callback = debounce(() => dispatch(setScroll(window.scrollY)), 300);

    document.addEventListener("scroll", callback);

    return () => document.removeEventListener("scroll", callback);
  }, []);

  return (
    <Router>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <ErrorBoundary>
          <AppContext.Provider value={{ state, dispatch }}>
            <Header />
            <Routes />
          </AppContext.Provider>
        </ErrorBoundary>
      </ThemeProvider>
    </Router>
  );
};

export default App;
