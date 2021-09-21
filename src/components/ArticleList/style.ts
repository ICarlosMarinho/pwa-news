import styled from "styled-components";

export const ListContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  justify-content: stretch;

  @media (max-width: 500px) {
    flex-direction: column;
    gap: 20px;
  }
`;
