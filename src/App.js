//import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-svg-core";
import Home from "./components/home";
import Teams from "./components/teams";
import Members from "./components/Members";
import Navigation from "./components/nav";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Navigation />
      <Switch>
        <Route path="/members" component={Members} />
        <Route path="/teams" component={Teams} />
        <Route path="/" component={Home} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
