import { FC, memo } from "react";

import {
  CardContainer,
  PublishDate,
  Image,
  Description,
  InfoContainer,
  Title,
} from "./index.style";

interface Props {
  article: Article;
  headline: boolean;
}

const ArticleCard: FC<Props> = ({ article, headline }) => {
  const renderCard = () => {
    const date = new Date(article.publishedAt.split("T")[0]);

    return (
      <CardContainer headline={headline}>
        <Image
          src={article.urlToImage}
          headline={headline}
          alt={`Imagem da notícia ${article.title}`}
        />
        <InfoContainer>
          <Title headline={headline}>{article.title}</Title>
          <PublishDate>
            {Intl.DateTimeFormat("pt-br", { timeZone: "UTC" }).format(date)}
          </PublishDate>
          <Description>{article.description}</Description>
        </InfoContainer>
      </CardContainer>
    );
  };

  return article ? renderCard() : null;
};

export default memo(ArticleCard);
