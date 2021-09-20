import { FC, memo } from "react";

import {
  CardContainer,
  InfoContainer,
  Image,
  Info,
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
        <InfoContainer>
          <Info>
            {Intl.DateTimeFormat("pt-br", { timeZone: "UTC" }).format(date)}
          </Info>
          <Info>{article.author}</Info>
        </InfoContainer>
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
