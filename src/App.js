import "./App.css";
import { CognitoUI } from "./components/CognitoUI";
import { Navbar } from "./components/Navbar";
import { Switch, Route } from "react-router-dom";

// const SIGN_OUT_URL = `https://bultin-login.auth.sa-east-1.amazoncognito.com/logout?client_id=1l1pg2a87u7agm14jh6loovrbh&logout_uri=http://localhost:3005`;

function App() {
  // const doSignOut = async () => {
  //   const resp = await fetch(SIGN_OUT_URL, { mode: "no-cors" });
  //   console.log("resp", resp);
  // };

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
