import { Link } from "react-router-dom";
import styled, { keyframes, StyledComponent } from "styled-components";

export const NavbarContainer = styled.nav`
  display: flex;
  gap: 20px;
  width: fit-content;
`;

const animation = keyframes`
  from {
    transform: translate(-20%);
    opacity: 0;
  }

  to {
    width: translate(0);
    opacity: 1;
  }
`;

interface Props {
  scroll: number;
}

export const Item = styled(Link)<Props>`
  color: ${(props) => (props.scroll > 0 ? "#fff" : props.theme.colors.text)};
  outline: none;
  text-decoration: none;

  position: relative;
  &:hover,
  &:focus {
    &::after {
      content: "";
      animation: ${animation} 0.3s cubic-bezier(0.7, 0.1, 0.9, 0.4) 1;
      width: 100%;
      height: 2px;
      background-color: ${(props) => props.theme.colors.primary};
      position: absolute;
      top: 100%;
      left: 0;
    }
  }
`;
