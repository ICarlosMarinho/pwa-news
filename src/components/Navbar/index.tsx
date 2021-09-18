import { FC } from "react";

import { NavbarContainer, Item, ItemContainer } from "./style";

interface Props {
  items: Array<{ name: string; to: string }>;
  scroll: number;
}

const Navbar: FC<Props> = ({ items, scroll }) => {
  const renderItems = () =>
    items.map((item, index) => (
      <ItemContainer key={index}>
        <Item to={item.to} scroll={scroll}>
          {item.name}
        </Item>
      </ItemContainer>
    ));

  return <NavbarContainer>{items ? renderItems() : null}</NavbarContainer>;
};

export default Navbar;
