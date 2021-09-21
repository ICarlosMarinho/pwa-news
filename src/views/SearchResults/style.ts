import styled from "styled-components";

export const ResultsContainer = styled.main`
  grid-area: content;
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 0 20px;
`;

export const Title = styled.h2`
  color: ${(props) => props.theme.colors.title};
  font-size: 3em;
  padding: 20px 0;

  @media (max-width: 500px) {
    font-size: 1em;
  }
`;
