import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  grid-area: content;
  flex-direction: column;
  gap: 60px;
  width: 100%;
  padding: 0 20px;

  @media (max-width: 500px) {
    gap: 40px;
  }
`;

export const Title = styled.h2`
  font-size: 5em;
  padding: 20px 0;
  color: ${(props) => props.theme.colors.title};

  @media (max-width: 500px) {
    font-size: 2em;
  }
`;
