import { FC } from "react";

import { NavbarContainer, Item } from "./style";

interface Props {
  items: Array<{ name: string; to: string }>;
  scroll: number;
}

const Navbar: FC<Props> = ({ items, scroll }) => {
  const renderItems = () =>
    items.map((item, index) => (
      <Item to={item.to} scroll={scroll} key={index}>
        {item.name}
      </Item>
    ));

  return <NavbarContainer>{items ? renderItems() : null}</NavbarContainer>;
};

export default Navbar;
