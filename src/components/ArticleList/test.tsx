import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

import theme from "../../theme";
import { articleMockServer } from "../../mocks";
import ArticleList from ".";
import { getHeadlines } from "../../services";

describe("ArticleList test suite", () => {
  const renderComponent = (articles: Article[] | null) => {
    render(
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

    renderComponent(articles);

    expect(screen.getByText("Test Author")).toBeInTheDocument();
  });

  test("Article List should not render Article Cards", () => {
    renderComponent([]);

    expect(screen.queryByRole("article")).not.toBeInTheDocument();
  });
});
