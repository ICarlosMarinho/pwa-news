import { rest } from "msw";
import { setupServer } from "msw/node";
import dotenv from "dotenv";

dotenv.config();

const articles: Article[] = [
  {
    author: "Test Author 1",
    content: "Test content 1",
    description: "Test description 1",
    publishedAt: "2021-11-11",
    source: { id: null, name: "Test source" },
    title: "Test title 1",
    url: "test.url.com",
    urlToImage: "test.url.com",
  },
  {
    author: "Test Author 2",
    content: "Test content 2",
    description: "Test description 2",
    publishedAt: "2021-11-11",
    source: { id: null, name: "Test source" },
    title: "Test title 2",
    url: "test.url.com",
    urlToImage: "test.url.com",
  },
];

const handles = [
  rest.get(`${process.env.API_URL}/top-headlines`, (req, res, ctx) => {
    const query = req.url.searchParams;

    query.set("country", "br");
    query.set("apiKey", `${process.env.API_KEY}`);

    return res(ctx.json({ status: 200, articles, totalResults: 2 }));
  }),

  rest.get(`${process.env.API_URL}/everything`, (req, res, ctx) => {
    const query = req.url.searchParams;

    query.set("q", "eua");
    query.set("language", "pt");
    query.set("sortBy", "relevancy");
    query.set("apiKey", `${process.env.API_KEY}`);
    query.set("pageSize", "10");
    query.set("page", "1");

    return res(ctx.json({ status: 200, articles, totalResults: 2 }));
  }),
];

export const articleMockServer = setupServer(...handles);
