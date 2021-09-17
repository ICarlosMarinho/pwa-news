import { FC, memo } from "react";
import ArticleCard from "../ArticleCard";

import { ListContainer } from "./index.style";

interface Props {
  articles: Article[];
}

const ArticleList: FC<Props> = ({ articles }) => {
  const renderList = () =>
    articles.map((article, index) => (
      <ArticleCard article={article} headline={false} key={index} />
    ));

  return articles.length ? <ListContainer>{renderList()}</ListContainer> : null;
};

export default memo(ArticleList);
