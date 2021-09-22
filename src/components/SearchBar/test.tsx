import { render, screen, fireEvent } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { Router, Route } from "react-router";

import SearchBar from ".";
import theme from "../../theme";
import { createMemoryHistory, History } from "history";

describe("SearchBar test suite", () => {
  const renderComponent = (history: History) => {
    render(
      <Router history={history}>
        <ThemeProvider theme={theme}>
          <Route path="/">
            <SearchBar scroll={0} />
          </Route>
        </ThemeProvider>
      </Router>
    );
  };

  test("Location should be /search/[search string] on submit", () => {
    const history = createMemoryHistory();
    const searchString = "eua";

    renderComponent(history);

    fireEvent.change(screen.getByPlaceholderText("Ex. política"), {
      target: { value: searchString },
    });
    fireEvent.click(screen.getByRole("button"));

    expect(history.location.pathname).toBe(`/search/${searchString}`);
  });
});
