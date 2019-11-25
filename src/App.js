import { BrowserRouter as Router, Route, Switch } from "inferno-router"

import NotFound from "./views/NotFound"
import Home from "./views/Home"

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  </Router>
)

export default App
