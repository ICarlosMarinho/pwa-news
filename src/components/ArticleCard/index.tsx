import { FC, memo } from "react";

import {
  CardContainer,
  PublishDate,
  Author,
  Image,
  Description,
  Title,
  ArticleLink,
} from "./style";

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
        <Title headline={headline}>{article.title}</Title>
        <PublishDate>
          {Intl.DateTimeFormat("pt-br", { timeZone: "UTC" }).format(date)}
        </PublishDate>
        <Author>{article.author}</Author>
        <Description>{article.description}</Description>
        <ArticleLink
          href={article.url}
          target="_blank"
          rel="noreferrer noopener">
          Ler artigo
        </ArticleLink>
      </CardContainer>
    );
  };

  return article ? renderCard() : null;
};

export default memo(ArticleCard);
