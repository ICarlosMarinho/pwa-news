import { rest } from "msw";
import { setupServer } from "msw/node";

const handles = [
  rest.get(`${process.env.API_URL}/top-headlines`, (_req, res, ctx) => {
    const responseData: Article = {
      author: "Test Author",
      content: "Test content",
      description: "Test description",
      publishedAt: "2021-11-11",
      source: { id: null, name: "Test source" },
      title: "Test title",
      url: "test.url.com",
      urlToImage: "test.url.com",
    };
    return res(ctx.status(200), ctx.json(responseData));
  }),
];

export const articleMockServer = setupServer(...handles);
