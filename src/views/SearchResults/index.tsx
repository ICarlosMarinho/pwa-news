import { FC, useContext } from "react";

import { ResultsContainer, Title } from "./style";
import AppContext from "../../hooks/AppContext";
import ArticleList from "../../components/ArticleList";

const SearchResults: FC = () => {
  const { searchResults } = useContext(AppContext);

  return (
    <ResultsContainer>
      <Title>Resultados da pesquisa</Title>
      <ArticleList articles={searchResults} />
    </ResultsContainer>
  );
};

export default SearchResults;
