import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Post from "./components/Post";
import Home from "./views/Home";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/:subject/:id" component={Post} />
        <Route path="*">
          <h1>Page not found!</h1>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
