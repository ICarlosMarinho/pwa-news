import { FC, useContext } from "react";
import AppContext from "../../state";

import SearchBar from "../SearchBar";
import { HeaderContainer, Logo, LogoContainer } from "./style";

const Header: FC = () => {
  const { state } = useContext(AppContext) as Context;

  return (
    <HeaderContainer scroll={state.scroll}>
      <LogoContainer to="/">
        <Logo>PWA News</Logo>
      </LogoContainer>
      <SearchBar scroll={state.scroll} />
    </HeaderContainer>
  );
};

export default Header;
