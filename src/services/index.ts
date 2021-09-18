import axios from "axios";
import { response } from "msw";

export const getHeadlines = (): Promise<ArticlesResponseData> => {
  return axios
    .get(`${process.env.API_URL}/top-headlines`, {
      params: {
        country: "br",
        apiKey: process.env.API_KEY,
      },
    })
    .then((response) => response.data);
};

export const getArticlesByKeyword = (
  keyword: string,
  page: number = 1
): Promise<ArticlesResponseData> => {
  return axios
    .get(`${process.env.API_URL}/everything`, {
      params: {
        q: keyword,
        language: "pt",
        sortBy: "relevancy",
        apiKey: process.env.API_KEY,
        pageSize: 10,
        page: page,
      },
    })
    .then((response) => response.data);
};
