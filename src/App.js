import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Importing Pages
import Feed from "./pages/Feed";
import Profile from "./pages/Profile";
import Search from "./pages/Search";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Feed</Link>
            </li>
            <li>
              <Link to='/search'>Search</Link>
            </li>
            <li>
              <Link to='/profile'>Profile</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path='/profile'>
            <Profile />
          </Route>
          <Route path='/search'>
            <Search />
          </Route>
          <Route path='/'>
            <Feed />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
/*
function Feed() {
  return <h2>Feed Page</h2>;
}

function Search() {
  return <h2>Search Page</h2>;
}

function Profile() {
  return <h2>Profile Page</h2>;
}
*/
