import { FC, useContext, useEffect, useState } from "react";

import { ResultsContainer, Title } from "./style";
import AppContext from "../../state";
import ArticleList from "../../components/ArticleList";
import { getArticlesByKeyword } from "../../services";
import {
  setFetchError,
  setSearchResults,
  setLoading,
  clearSearchResults,
} from "../../state/actions";
import { useParams } from "react-router";

const SearchResults: FC = () => {
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const { keyword } = useParams<{ keyword: string }>();
  const { state, dispatch } = useContext(AppContext) as Context;

  const fetchResults = () => {
    dispatch(setLoading(true));

    getArticlesByKeyword(keyword, page)
      .then((response) => {
        dispatch(setSearchResults(response.articles));
        setTotalResults(response.totalResults);
      })
      .catch(() => dispatch(setFetchError(true)))
      .finally(() => dispatch(setLoading(false)));
  };

  useEffect(() => {
    dispatch(clearSearchResults());
    fetchResults();
  }, [keyword]);

  useEffect(() => fetchResults(), [page]);

  useEffect(() => {
    if (
      state.scroll / document.body.clientHeight > 0.7 &&
      state.searchResults.length < totalResults
    )
      setPage(page + 1);
  }, [state.scroll]);

  return (
    <ResultsContainer>
      <Title>Resultados da pesquisa</Title>
      <ArticleList articles={state.searchResults} />
      {state.loading ? <h1>Carregando artigos</h1> : null}
      {state.fetchError ? (
        <h1>Erro ao carregar artigos, tente novamente.</h1>
      ) : null}
    </ResultsContainer>
  );
};

export default SearchResults;
