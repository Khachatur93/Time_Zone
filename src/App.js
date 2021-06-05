// import { Container } from "react-bootstrap";
import NavBar from "./Components/NavBar/NavBar";
import About from "./Components/About/About";
import Main from "./Components/Main/Main";
import Contacts from "./Components/Contacts/Contacts";
import Error from "./Components/404/404";
import ShopPage from "./Components/ShopPage/ShopPage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/MAin" component={Main} exact={true} />
        <Route path="/About" component={About} exact={true} />
        <Route path="/Contacts" component={Contacts} exact={true} />
        <Route path="/Error" component={Error} exact={true} />
        <Route path="/ShopPage" component={ShopPage} exact={true} />

        <Redirect to="/Error" />
      </Switch>
    </Router>
  );
}

export default App;
