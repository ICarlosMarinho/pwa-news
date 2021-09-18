import { FC, useContext, useEffect } from "react";

import AppContext from "../../hooks/AppContext";
import { getHeadlines } from "../../services";
import { HomeContainer, Title } from "./style";
import ArticleCard from "../../components/ArticleCard";
import ArticleList from "../../components/ArticleList";
import Header from "../../components/Header";

const Home: FC = () => {
  const { articles, setArticles, setLoading, setFetchError } =
    useContext(AppContext);

  useEffect(() => {
    setLoading(true);

    getHeadlines()
      .then((resData) => setArticles(resData.articles))
      .catch((error) => {
        console.log(error);
        setFetchError(true);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <HomeContainer>
      <Header />
      <Title>Notícias do dia</Title>
      <ArticleCard headline={true} article={articles[0] ?? null} />
      <ArticleList articles={articles.slice(1)} />
    </HomeContainer>
  );
};

export default Home;
