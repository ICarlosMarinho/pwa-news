import { FC, useEffect, useState } from "react";

import { debounce } from "../../utils";
import Navbar from "../Navbar";

import { HeaderContainer, Logo } from "./style";

const Header: FC = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const callback = debounce(() => setScroll(window.scrollY), 300);

    document.addEventListener("scroll", callback);

    return () => document.removeEventListener("scroll", callback);
  }, []);

  return (
    <HeaderContainer scroll={scroll}>
      <Logo>PWA News</Logo>
      <Navbar
        scroll={scroll}
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
