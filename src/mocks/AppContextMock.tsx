import { FC, useReducer } from "react";
import { Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import AppContext from "../state";

import { History } from "history";
import theme from "../theme";
import reducer from "../state/reducer";

interface Props {
  history: History;
}

const AppContextMock: FC<Props> = ({ children, history }) => {
  const intialState: AppState = {
    scroll: 0,
    loading: false,
    fetchError: false,
    searchResults: new Array<Article>(),
    headlines: new Array<Article>(),
  };

  const [state, dispatch] = useReducer(reducer, intialState);

  return (
    <Router history={history}>
      <ThemeProvider theme={theme}>
        <AppContext.Provider value={{ state, dispatch }}>
          {children}
        </AppContext.Provider>
      </ThemeProvider>
    </Router>
  );
};

export default AppContextMock;
