import { FC } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "./GlobalStyle";
import Routes from "./routes";
import AppContext from "./hooks/AppContext";
import useInitialState from "./hooks/useInitialState";
import theme from "./theme";
import Header from "./components/Header";

const App: FC = () => {
  const initialState = useInitialState();

  return (
    <Router>
      <GlobalStyle />
      <AppContext.Provider value={initialState}>
        <ThemeProvider theme={theme}>
          <Header />
          <Routes />
        </ThemeProvider>
      </AppContext.Provider>
    </Router>
  );
};

export default App;
