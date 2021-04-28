import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import List from "../components/List/List";
import Form from "../components/Form/Form";
import Searchby from "../components/searchby/searchby";
import Footer from "../components/Footer";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>OxyGen</h1>
        <h3>
          Help those in need by giving information about medical equipments
          <br></br> and resourses and contribute to humanity
        </h3>

        <Router>
          <div>
            <ul>
              <li>
                <Link to="/List">List of verified Dealers/suppliers</Link>
              </li>
              <li>
                <Link to="/ListSorted">List sorted by city/state</Link>
              </li>
              <li>
                <Link to="/form">Provide Information</Link>
              </li>
            </ul>
          </div>

          <hr />

          <Switch>
            <Route exact path="/List">
              <List />
            </Route>
            <Route exact path="/ListSorted">
              <Searchby />
            </Route>
            <Route exact path="/form">
              <Form />
            </Route>
          </Switch>
        </Router>
        <Footer />
      </header>
    </div>
  );
}

export default App;
