import { FC, memo } from "react";
import ArticleCard from "../ArticleCard";

import { ListContainer } from "./style";

interface Props {
  articles: Article[];
}

const ArticleList: FC<Props> = ({ articles }) => {
  const renderList = () =>
    articles.map((article) => (
      <ArticleCard article={article} headline={false} key={article.id} />
    ));

  return articles.length ? <ListContainer>{renderList()}</ListContainer> : null;
};

export default memo(ArticleList);
