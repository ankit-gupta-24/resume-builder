import HomePage from "./containers/HomePage";
import GetDetailsPage from "./containers/GetDetailsPage";
import "./assets/scss/global.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={"/format/:fn"} component={GetDetailsPage} />
        <Route path={"/"} component={HomePage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
