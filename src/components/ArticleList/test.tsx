import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

import theme from "../../theme";
import { articleMockServer } from "../../mocks/serverMock";
import ArticleList from ".";
import { getHeadlines } from "../../services";

describe("ArticleList test suite", () => {
  const renderComponent = (articles: Article[] | null) => {
    return render(
      <ThemeProvider theme={theme}>
        <ArticleList articles={articles as Article[]} />
      </ThemeProvider>
    );
  };

  beforeAll(() => articleMockServer.listen());
  beforeEach(() => articleMockServer.resetHandlers());
  afterAll(() => articleMockServer.close());

  test("Article List shoud render Article Card once", async () => {
    const articles = (await getHeadlines()).articles;

    const { container } = renderComponent(articles);

    expect(container).toBeInTheDocument();
    expect(screen.getByText("Test title 1")).toBeInTheDocument();
  });

  test("Article List should not render Article Cards", () => {
    renderComponent([]);

    expect(screen.queryByText("Test title 1")).not.toBeInTheDocument();
    expect(screen.queryByRole("article")).not.toBeInTheDocument();
  });
});
