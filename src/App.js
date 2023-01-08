import "./App.css";
import { CognitoUI } from "./components/CognitoUI";
import { Navbar } from "./components/Navbar";
import { Switch, Route, useHistory } from "react-router-dom";
import { useState } from "react";
import { Loading } from "./components/Loading";
import { signOut } from "./utils";

function App() {
  const [user, setUser] = useState(null);
  const history = useHistory();

  const doSignOut = async () => {
    const token = localStorage.getItem("refresh_token");
    await signOut(token);
    localStorage.clear();
    setUser(null);
    history.replace("/");
  };

  return (
    <div>
      <Navbar auth={user} doSignOut={doSignOut} />
      <div className="container">
        <Switch>
          <Route exact path={["/", "/cognito-hosted-ui"]}>
            {!user && <h2>Sign in to start Cognito Hosted-UI</h2>}
            {user && <h2>Sign out restart with Cognito Hosted-UI</h2>}
          </Route>
          <Route path="/loading">
            <Loading setUser={setUser} />
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
