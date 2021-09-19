import { FC, useContext, useEffect } from "react";
import AppContext from "../../state";

import Navbar from "../Navbar";
import SearchBar from "../SearchBar";

import { HeaderContainer, Logo } from "./style";

const Header: FC = () => {
  const { state } = useContext(AppContext) as Context;

  return (
    <HeaderContainer scroll={state.scroll}>
      <Logo>PWA News</Logo>
      <SearchBar scroll={state.scroll} />
      <Navbar
        scroll={state.scroll}
        items={[
          { name: "Início", to: "/" },
          { name: "Categorias", to: "/categorias" },
          { name: "sobre", to: "/sobre" },
        ]}
      />
    </HeaderContainer>
  );
};

export default Header;
