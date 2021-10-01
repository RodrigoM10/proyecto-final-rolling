import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";


import { Switch, Route } from "react-router-dom";

function App() {

  return (
    <div>
      {/* <Header /> */}
          <Switch>
              <Route path="/" exact>
                {/* PAGE 1 */}
              </Route>
              <Route path="/" exact>
                {/* PAGE 2 */}
              </Route>
              <Route path="/" exact>
                {/* PAGE 3 */}
              </Route>
              <Route path="/" exact>
                {/* PAGE 4 */}
              </Route>
          </Switch>
    </div>
  );
}

export default App;
