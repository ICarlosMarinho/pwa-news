import styled from "styled-components";

interface Props {
  headline: boolean;
}

export const CardContainer = styled.article<Props>`
  display: grid;
  grid-template-areas: ${(props) =>
    props.headline
      ? `"image title"
    "image info"
    "image description"
    "image link"`
      : `"image"
    "title"
    "info"
    "description"
    "link"`};

  grid-template-rows: ${(props) =>
    props.headline ? "repeat(4, auto)" : "repeat(5, auto)"};

  grid-template-columns: ${(props) =>
    props.headline ? "repeat(2, 1fr)" : "1fr"};

  gap: ${(props) => (props.headline ? "30px" : "10px")};
  grid-area: ${(props) => (props.headline ? "headline" : "")};
  width: ${(props) => (props.headline ? "100%" : "20%")};
  height: min-content;

  @media (max-width: 1023px) {
    grid-template-areas:
      "image"
      "title"
      "info"
      "description"
      "link";

    grid-template-rows: repeat(5, auto);
    grid-template-columns: 1fr;
  }

  @media (max-width: 500px) {
    width: 100%;
    gap: 10px;
  }
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

  @media (max-width: 500px) {
    font-size: 1em;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: space-between;
  grid-area: info;
`;

export const Info = styled.span`
  height: fit-content;
  color: ${(props) => props.theme.colors.subtitle};
`;

export const Description = styled.p`
  font-weight: bold;
  grid-area: description;
  text-align: justify;
`;

export const ArticleLink = styled.a`
  text-decoration: none;
  grid-area: link;
  color: ${(props) => props.theme.colors.title};
`;
