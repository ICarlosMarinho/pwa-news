import { render, screen, waitFor } from "@testing-library/react";
import { createMemoryHistory } from "history";

import Home from ".";
import AppContextMock from "../../mocks/AppContextMock";
import { articleMockServer } from "../../mocks/serverMock";

describe("Home view test suite", () => {
  beforeAll(() => articleMockServer.listen());
  beforeEach(() => articleMockServer.resetHandlers());
  afterAll(() => articleMockServer.close());

  const renderComponent = () => {
    return render(
      <AppContextMock history={createMemoryHistory()}>
        <Home />
      </AppContextMock>
    );
  };

  test("Should render loading text", async () => {
    let text = "Carregando";

    renderComponent();

    expect(screen.getByText(text)).toBeInTheDocument();

    await screen.findByText("Test title 1");
  });

  test("Should render ArticleCard components", async () => {
    renderComponent();

    expect(await screen.findByText("Test title 1")).toBeInTheDocument();
    expect(await screen.findByText("Test title 2")).toBeInTheDocument();
  });

  test("Should render title", async () => {
    const title = "Notícias do dia";

    renderComponent();
    expect(screen.getByText(title)).toBeInTheDocument();

    await screen.findByText("Test title 1");
  });
});
