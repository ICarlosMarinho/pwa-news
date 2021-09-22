import { FC, useState, FormEvent } from "react";
import { useHistory } from "react-router";

import { Button, Input, SearchBarContainer, Glass } from "./style";

interface Props {
  scroll: number;
}

const SearchBar: FC<Props> = ({ scroll }) => {
  const history = useHistory();
  const [searchStr, setSearchStr] = useState("");

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    history.push(`/search/${searchStr}`);
  };

  return (
    <SearchBarContainer role="form" onSubmit={handleSubmit}>
      <Input
        value={searchStr}
        onChange={(evt) => setSearchStr(evt.target.value)}
        placeholder="Ex. política"
        required
        maxLength={100}
        scroll={scroll}
      />
      <Button type="submit" scroll={scroll} aria-label="Buscar notícia">
        <Glass
          scroll={scroll}
          xmlns="http://www.w3.org/2000/svg"
          width="80%"
          height="80%"
          viewBox="0 0 71.967 71.967">
          <path
            d="M29.306 227.85A26.458 26.458 0 0 0 2.847 254.31a26.458 26.458 0 0 0 26.459 26.458 26.458 26.458 0 0 0 26.458-26.458 26.458 26.458 0 0 0-26.458-26.459Zm19.031 45.581 20.748 20.747z"
            transform="translate(0 -225.033)"
          />
        </Glass>
      </Button>
    </SearchBarContainer>
  );
};

export default SearchBar;
