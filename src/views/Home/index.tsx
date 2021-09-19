import { FC, useContext, useEffect } from "react";

import AppContext from "../../state";
import { getHeadlines } from "../../services";
import { HomeContainer, Title } from "./style";
import ArticleCard from "../../components/ArticleCard";
import ArticleList from "../../components/ArticleList";

const Home: FC = () => {
  const { state } = useContext(AppContext) as Context;

  useEffect(() => {
    // if (!headlines.length) {
    //   setLoading(true);
    //   getHeadlines()
    //     .then((resData) => setHeadlines(resData.articles))
    //     .catch((error) => {
    //       console.log(error);
    //       setFetchError(true);
    //     })
    //     .finally(() => setLoading(false));
    // }
  }, []);

  return (
    <HomeContainer>
      <Title>Notícias do dia</Title>
      <ArticleCard headline={true} article={state.headlines[0] ?? null} />
      <ArticleList articles={state.headlines.slice(1)} />
    </HomeContainer>
  );
};

export default Home;
