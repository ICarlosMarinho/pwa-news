import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  grid-area: content;
  flex-direction: column;
  gap: 60px;
  width: 100%;
`;

export const Title = styled.h2`
  font-size: 5em;
  color: ${(props) => props.theme.colors.title};
  padding: 0 20px;
`;
