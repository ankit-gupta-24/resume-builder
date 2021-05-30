import HomePage from "./containers/HomePage";
import PreviewPage from "./containers/PreviewPage";
import GetDetailsPage from "./containers/GetDetailsPage";
import "./assets/scss/global.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={"/preview"} component={PreviewPage} />
        <Route path={"/format/:fn"} component={GetDetailsPage} />
        <Route path={"/"}  component={HomePage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
