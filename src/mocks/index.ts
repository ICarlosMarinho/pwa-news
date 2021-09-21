import { rest } from "msw";
import { setupServer } from "msw/node";
import dotenv from "dotenv";

dotenv.config();

const handles = [
  rest.get(`${process.env.API_URL}/top-headlines`, (req, res, ctx) => {
    const query = req.url.searchParams;
    const articles: Article[] = [
      {
        author: "Test Author",
        content: "Test content",
        description: "Test description",
        publishedAt: "2021-11-11",
        source: { id: null, name: "Test source" },
        title: "Test title",
        url: "test.url.com",
        urlToImage: "test.url.com",
      },
    ];

    query.set("country", "br");
    query.set("apiKey", `${process.env.API_KEY}`);

    return res(
      ctx.status(200),
      ctx.json({ status: 200, articles, totalResults: 1 })
    );
  }),
];

export const articleMockServer = setupServer(...handles);
