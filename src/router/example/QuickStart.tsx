import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Prompt,
  NavLink,
  RouteComponentProps,
  useLocation,
  useHistory,
  useRouteMatch,
  useParams
} from "react-router-dom";

export default function QuickStart() {
  return (
    <Router
      // basename="/calendar"
      // getUserConfirmation={(message: string, callback) => {
      //   console.log(223232313132,'message');
      //   // this is the default behavior
      //   const allowTransition = window.confirm(message);
      //   callback(allowTransition);
      // }}
    >
      <div>
      {/* <Prompt message="Are you sure you want to leave?" /> */}
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/:id/:name">
            <Home  />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  console.log(useLocation(),'--===----');
  console.log(useHistory(),'--===----');
  console.log(useRouteMatch(),'--==useRouteMatch=----');
  console.log(useParams(),'--==useParams=----');
  
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}



