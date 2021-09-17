const params = {
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
};

const url = "http://localhost:3001";

export const getNews = (subject = "", id = "") => {
  return fetch(`${url}/api/${subject}/${id}`, params).then((response) =>
    response.json()
  );
};
