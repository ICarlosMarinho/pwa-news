import { render, screen } from "@testing-library/react";
import ArticleCard from ".";
import { articleMockServer } from "../../mocks";
import { getHeadlines } from "../../services";

describe("ArticleCard test suite", () => {
  beforeAll(() => articleMockServer.listen());
  beforeEach(() => articleMockServer.resetHandlers());
  afterAll(() => articleMockServer.close());

  test("Article Card should render article info after request", () => {
    getHeadlines().then(console.log);
  });
});
