import styled from "styled-components";

export const SearchBarContainer = styled.form`
  display: flex;
  gap: 20px;
  height: fit-content;
  align-items: center;

  @media (max-width: 500px) {
    justify-content: center;
  }
`;

interface Props {
  scroll: number;
}

export const Input = styled.input<Props>`
  height: 40px;
  border: none;
  outline: none;
  background-color: transparent;
  border-bottom: 1px solid
    ${(props) => (props.scroll > 0 ? "#fff" : props.theme.colors.title)};

  color: ${(props) => (props.scroll > 0 ? "#fff" : props.theme.colors.text)};
  &:focus {
    border-bottom: 2px solid ${(props) => props.theme.colors.primary};
  }
  flex: 1;
`;

export const Button = styled.button<Props>`
  height: 40px;
  width: fit-content;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: 2px solid ${(props) => props.theme.colors.primary};
  }
`;

export const Glass = styled.svg<Props>`
  fill: none;
  stroke: ${(props) => (props.scroll > 0 ? "#fff" : props.theme.colors.title)};
  stroke-width: 5px;
  stroke-opacity: 1;
`;
