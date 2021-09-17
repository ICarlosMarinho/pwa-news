const params = {
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
};

const url = "https://stormy-brook-79548.herokuapp.com";

export const getNews = (subject = "", id = "") => {
  return fetch(`${url}/api/${subject}/${id}`, params).then((response) =>
    response.json()
  );
};
