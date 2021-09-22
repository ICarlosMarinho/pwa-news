import { render, screen } from "@testing-library/react";
import { createMemoryHistory, History } from "history";

import SearchResults from ".";
import AppContextMock from "../../mocks/AppContextMock";
import { articleMockServer } from "../../mocks/serverMock";

describe("SearchResults test suite", () => {
  const renderComponent = (history: History) => {
    return render(
      <AppContextMock history={history}>
        <SearchResults />
      </AppContextMock>
    );
  };

  beforeAll(() => articleMockServer.listen());
  beforeEach(() => articleMockServer.resetHandlers());
  afterAll(() => articleMockServer.close());

  test("Should render articles cards after request", async () => {
    const history = createMemoryHistory();

    history.push("/search/eua");

    renderComponent(history);

    expect(await screen.findByText("Test title 1")).toBeInTheDocument();
    expect(await screen.findByText("Test title 2")).toBeInTheDocument();
  });
});
