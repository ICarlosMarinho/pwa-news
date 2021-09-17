import axios from "axios";

export const getHeadlines = (): Promise<HeadlinesResponseData> => {
  return axios
    .get(`${process.env.API_URL}/top-headlines`, {
      params: {
        country: "br",
        apiKey: process.env.API_KEY,
      },
    })
    .then((response) => response.data);
};
