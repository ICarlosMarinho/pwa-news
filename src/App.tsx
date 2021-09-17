import { FC } from "react";

import ResetStyles from "./ResetStyle";
import Routes from "./routes";
import AppContext from "./hooks/AppContext";
import useInitialState from "./hooks/useInitialState";
import { ThemeProvider } from "styled-components";
import theme from "./theme";

const App: FC = () => {
  const initialState = useInitialState();

  return (
    <>
      <ResetStyles />
      <AppContext.Provider value={initialState}>
        <ThemeProvider theme={theme}>
          <Routes />
        </ThemeProvider>
      </AppContext.Provider>
    </>
  );
};

export default App;
