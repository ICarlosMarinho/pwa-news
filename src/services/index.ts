import axios from "axios";
import { v4 as uuidv4 } from "uuid";

export const getHeadlines = (): Promise<ArticlesResponseData> => {
  return axios
    .get<ArticlesResponseData>(`${process.env.API_URL}/top-headlines`, {
      params: {
        country: "br",
        apiKey: process.env.API_KEY,
      },
    })
    .then((response) => ({
      ...response.data,
      articles: response.data.articles.map((article) => {
        article.id = uuidv4();
        return article;
      }),
    }));
};

export const getArticlesByKeyword = (
  keyword: string,
  page: number = 1
): Promise<ArticlesResponseData> => {
  return axios
    .get<ArticlesResponseData>(`${process.env.API_URL}/everything`, {
      params: {
        q: keyword,
        language: "pt",
        sortBy: "relevancy",
        apiKey: process.env.API_KEY,
        pageSize: 10,
        page: page,
      },
    })
    .then((response) => ({
      ...response.data,
      articles: response.data.articles.map((article) => {
        article.id = uuidv4();
        return article;
      }),
    }));
};
