import { FC, useContext, useEffect } from "react";

import AppContext from "../../hooks/AppContext";
import { getHeadlines } from "../../services";
import { HomeContainer, Title } from "./style";
import ArticleCard from "../../components/ArticleCard";
import ArticleList from "../../components/ArticleList";

const Home: FC = () => {
  const { headlines, setHeadlines, setLoading, setFetchError } =
    useContext(AppContext);

  useEffect(() => {
    if (!headlines.length) {
      setLoading(true);

      getHeadlines()
        .then((resData) => setHeadlines(resData.articles))
        .catch((error) => {
          console.log(error);
          setFetchError(true);
        })
        .finally(() => setLoading(false));
    }
  }, []);

  return (
    <HomeContainer>
      <Title>Notícias do dia</Title>
      <ArticleCard headline={true} article={headlines[0] ?? null} />
      <ArticleList articles={headlines.slice(1)} />
    </HomeContainer>
  );
};

export default Home;
