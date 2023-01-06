import "./App.css";
import { CognitoUI } from "./components/CognitoUI";
import { Navbar } from "./components/Navbar";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar user={{}} />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <h2>Testing Amplify API</h2>
          </Route>
          <Route path="/signIn">
            <CognitoUI />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
