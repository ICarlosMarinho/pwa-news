import styled from "styled-components";

export const HomeContainer = styled.div`
  display: grid;
  grid-template-areas:
    "header"
    "page-title"
    "headline"
    "news-list";
  grid-template-rows: repeat(2, 40px) place-content auto;
  grid-template-columns: 100%;
  row-gap: 20px;
`;

export const Title = styled.h2`
  grid-area: page-title;
  font-size: 5em;
  color: ${(props) => props.theme.colors.title};
`;
