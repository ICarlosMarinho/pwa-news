import styled from "styled-components";

interface Props {
  headline: boolean;
}

export const CardContainer = styled.article<Props>`
  display: grid;
  grid-template-areas: ${(props) =>
    props.headline
      ? `"image title title"
    "image date author"
    "image description description"
    "image link link"`
      : `"image image"
    "title title"
    "date author"
    "description description"
    "link link"`};

  grid-template-rows: ${(props) =>
    props.headline
      ? "repeat(4, auto)"
      : "auto max-content auto max-content auto"};

  grid-template-columns: ${(props) =>
    props.headline ? "2fr repeat(2, 1fr)" : "repeat(2, 1fr)"};

  gap: ${(props) => (props.headline ? "30px" : "20px")};
  grid-area: ${(props) => (props.headline ? "headline" : "")};
  width: ${(props) => (props.headline ? "100%" : "20%")};
  max-width: ${(props) => (props.headline ? "100%" : "20%")};
  padding: ${(props) => (props.headline ? "0 20px" : "0")};
`;

export const Image = styled.img<Props>`
  grid-area: image;
  border-radius: 3px;
  width: 100%;
`;

export const Title = styled.h3<Props>`
  color: ${(props) => (props.headline ? "#BB2020" : props.theme.colors.title)};
  font-size: ${(props) => (props.headline ? "2em" : "1em")};
  grid-area: title;
  text-align: justify;
`;

export const PublishDate = styled.p`
  color: ${(props) => props.theme.colors.subtitle};
  grid-area: date;
  text-align: left;
`;

export const Author = styled(PublishDate)`
  grid-area: author;
  justify-content: flex-end;
  text-align: right;
`;

export const Description = styled(PublishDate)`
  font-weight: bold;
  grid-area: description;
  text-align: justify;
`;

export const ArticleLink = styled.a`
  text-decoration: none;
  grid-area: link;
  color: ${(props) => props.theme.colors.title};
`;
