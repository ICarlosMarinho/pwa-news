import { FC, useContext, useEffect } from "react";

import AppContext from "../../state";
import { getHeadlines } from "../../services";
import { HomeContainer, Title } from "./style";
import ArticleCard from "../../components/ArticleCard";
import ArticleList from "../../components/ArticleList";
import { setFetchError, setHeadlines, setLoading } from "../../state/actions";

const Home: FC = () => {
  const { state, dispatch } = useContext(AppContext) as Context;

  useEffect(() => {
    dispatch(setLoading(true));
    getHeadlines()
      .then((resData) => dispatch(setHeadlines(resData.articles)))
      .catch(() => dispatch(setFetchError(true)))
      .finally(() => dispatch(setLoading(false)));
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
