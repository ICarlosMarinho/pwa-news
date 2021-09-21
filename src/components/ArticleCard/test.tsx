import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import ArticleCard from ".";
import { articleMockServer } from "../../mocks";
import { getHeadlines } from "../../services";
import theme from "../../theme";

describe("ArticleCard test suite", () => {
  const renderComponent = (article: Article | null) => {
    render(
      <ThemeProvider theme={theme}>
        <ArticleCard article={article as Article} headline={false} />
      </ThemeProvider>
    );
  };

  beforeAll(() => articleMockServer.listen());
  beforeEach(() => articleMockServer.resetHandlers());
  afterAll(() => articleMockServer.close());

  test("Article Card should render article info after request", async () => {
    const article = (await getHeadlines()).articles[0];

    renderComponent(article);

    expect(screen.getByText("Test Author")).toBeInTheDocument();
  });

  test("Article Card should not render elements", () => {
    renderComponent(null);

    expect(screen.queryByText("Test Author")).not.toBeInTheDocument();
  });
});
