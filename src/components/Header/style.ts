import { Link } from "react-router-dom";
import styled from "styled-components";

interface Props {
  scroll: number;
}

export const HeaderContainer = styled.header<Props>`
  grid-area: header;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  height: 80px;
  top: 0;
  background-color: ${(props) =>
    props.scroll > 0 ? `${props.theme.colors.text}FA` : "transparent"};
  transition: background-color 0.3s ease-in;
  padding: 0 20px;

  @media (max-width: 500px) {
    flex-direction: column;
    height: fit-content;
  }
`;

export const LogoContainer = styled(Link)`
  text-decoration: none;
`;
export const Logo = styled.h1`
  color: ${(props) => props.theme.colors.primary};
`;
