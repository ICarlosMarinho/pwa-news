import { FC, useContext, useEffect } from "react";

import { ResultsContainer, Title } from "./style";
import AppContext from "../../state";
import ArticleList from "../../components/ArticleList";
import { getArticlesByKeyword } from "../../services";
import axios from "axios";
import { setSearchPage, setSearchResults } from "../../state/actions";

const SearchResults: FC = () => {
  const { state, dispatch } = useContext(AppContext) as Context;

  useEffect(() => {
    if (state.scroll / document.body.clientHeight > 0.7) {
      // getArticlesByKeyword("bitcoin", page)
      //   .then((resData) => {
      //     setSearchResults([...searchResults, ...resData.articles]);

      //     setPage(page + 1);
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //     setFetchError(true);
      //   })
      //   .finally(() => setLoading(false));

      console.log(
        ` ${state.scroll / document.body.clientHeight > 0.7} sending request...`
      );

      axios
        .get(
          `http://localhost:3002/articles?_page=${state.searchPage}_limit=10`
        )
        .then((response) => {
          dispatch(setSearchResults(response.data));
          dispatch(setSearchPage(state.searchPage + 1));
        });
    }

    return () => {
      dispatch(setSearchResults(new Array<Article>()));
    };
  }, [state.scroll]);

  return (
    <ResultsContainer>
      <Title>Resultados da pesquisa</Title>
      <ArticleList articles={state.searchResults} />
    </ResultsContainer>
  );
};

export default SearchResults;
