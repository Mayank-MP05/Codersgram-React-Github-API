import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Importing Pages
import Feed from "./pages/Feed";
import Profile from "./pages/Profile";
import Search from "./pages/Search";
import Start from "./pages/Start";
import Followers from "./pages/Followers";
import Following from "./pages/Following";
import Repos from "./pages/Repos";

// Components Import
import Biocard from "./components/Biocard";

export default class App extends React.Component {
  state = {
    user: "",
  };

  onUserChange = (e) => {
    let val = e.target.value;
    console.log(val);
    this.setState({
      user: val,
    });
  };

  render() {
    return (
      <Router>
        <div>
          <nav className='navbar navbar-light bg-light justify-content-between'>
            <a className='navbar-brand'>Github's Codersgram</a>
            <div className='form-inline'>
              <input
                onChange={this.onUserChange}
                className='form-control mr-sm-2'
                type='search'
                placeholder='Search'
                aria-label='Search'
              />
              <a href={`./${this.state.user}`}>
                <button className='btn btn-outline-success my-2 my-sm-0'>
                  Search
                </button>
              </a>
            </div>
          </nav>
          {/*
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
            <Route exact path='/'>
              <div className='container'>
                <div className='row'>
                  <div className='col-4'>
                    <Biocard />
                  </div>
                  <div className='col-8'>
                    <Repos />
                  </div>
                </div>
              </div>
            </Route>
            <Route path='/followers'>
              <div className='container'>
                <div className='row'>
                  <div className='col-4'>
                    <Biocard />
                  </div>
                  <div className='col-8'>
                    <Followers />
                  </div>
                </div>
              </div>
            </Route>
            <Route path='/following'>
              <div className='container'>
                <div className='row'>
                  <div className='col-4'>
                    <Biocard />
                  </div>
                  <div className='col-8'>
                    <Following />
                  </div>
                </div>
              </div>
            </Route>
            <Route
              path='/:username'
              render={(props) => <Start {...this.props} />}
            />

            <Route
              path='/:username/followers'
              render={(props) => <Start {...this.props} />}
            />

            <Route
              path='/:username/following'
              render={(props) => <Start {...this.props} />}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}
