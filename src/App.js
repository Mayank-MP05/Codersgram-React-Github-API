import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";

// Importing Pages
import Start from "./pages/Start";
import Followers from "./pages/Followers";
import Following from "./pages/Following";
import Repos from "./pages/Repos";

// Components Import
import Biocard from "./components/Biocard";

//Full Page Layouts Imports
import Userdashboard from "./layouts/Userdashboard";
import Userfollowing from "./layouts/Userfollowing";
import Userfollowers from "./layouts/Userfollowers";

export default class App extends React.Component {
  state = {
    user: "",
    UnstableUser: "",
    status: "Get User Data",
    profileData: {},
    reposData: {},
    followersData: {},
    followingData: {},
  };

  onUserChange = (e) => {
    let val = e.target.value;
    let old = this.state;
    old.UnstableUser = val;
    this.setState(old);
  };

  setUser = () => {
    let old = this.state;
    console.log("Setuser Called");
    this.setState({
      user: old.UnstableUser,
      UnstableUser: "",
      status: "Redirect to User",
    });
    this.getAllData();
  };

  getAllData = () => {
    let old = this.state;
    console.log("GetAllData Called");

    // User Profile Data
    let url = "https://api.github.com/users/Mayank-MP05";
    axios.get(url).then((res) => {
      old.profileData = res.data;
      console.log(old.profileData);
    });
    // User Repos Data
    axios.get(url + "/repos").then((res) => {
      old.reposData = res.data;
      console.log(old.reposData);
    });
    // User Followerz Data
    axios.get(url + "/followers").then((res) => {
      old.followersData = res.data;
      console.log(old.followersData);
    });
    // User Following Data
    axios.get(url + "/following").then((res) => {
      old.followingData = res.data;
      console.log(old.followingData);
    });
    console.log("GetAllData Finish");
    setTimeout(() => {
      console.log("State Settled All...");
      this.setState(old);
    }, 3000);
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
                placeholder='Username...'
                aria-label='Search'
              />
              <Link to={`/${this.state.user}`}>
                <button
                  className='btn btn-outline-success my-2 my-sm-0'
                  onClick={this.setUser}>
                  {this.state.status}
                </button>
              </Link>
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
              exact
              path='/:username'
              render={(props) => (
                <Userdashboard {...this.props} user={this.state.user} />
              )}
            />

            <Route
              exact
              path='/:username/followers'
              render={(props) => (
                <Userfollowers {...this.props} user={this.state.user} />
              )}
            />

            <Route
              exact
              path='/:username/following'
              render={(props) => (
                <Userfollowing {...this.props} user={this.state.user} />
              )}
            />

            <Route path='/'>
              <h4>404 Page Not Found</h4>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
