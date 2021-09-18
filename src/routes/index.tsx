import { FC } from "react";
import { Route, Switch } from "react-router-dom";

import Home from "../views/Home";
import PageNotFound from "../views/PageNotFound";
import SearchResults from "../views/SearchResults";

const Routes: FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/:keyword" component={SearchResults} />
      <Route path="*" component={PageNotFound} />
    </Switch>
  );
};

export default Routes;
