import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";

// Importing Pages
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
    old.user = old.UnstableUser;
    old.UnstableUser = "";
    //console.log("Setuser Called");
    this.setState(old);
    this.getAllData();
  };

  getAllData = () => {
    let old = this.state;
    old.status = "Downloading ...";
    this.setState(old);

    // User Profile Data
    let url = "https://api.github.com/users/Mayank-MP05";
    axios.get(url).then((res) => {
      old.profileData = res.data;
    });
    // User Repos Data
    axios.get(url + "/repos").then((res) => {
      old.reposData = res.data;
    });
    // User Followerz Data
    axios.get(url + "/followers").then((res) => {
      old.followersData = res.data;
    });
    // User Following Data
    axios.get(url + "/following").then((res) => {
      old.followingData = res.data;
    });

    setTimeout(() => {
      old.status = "Redirect";
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
              <Link
                to={`/${this.state.user}`}
                className='btn btn-outline-success my-2 my-sm-0'
                onClick={this.setUser}>
                {this.state.status}
              </Link>
            </div>
          </nav>

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
              path='/:username/followers'
              render={(props) => (
                <Userfollowers
                  route={props}
                  userData={this.state.profileData}
                  followersData={this.state.followersData}
                />
              )}
            />

            <Route
              exact
              path='/:username/following'
              render={(props) => (
                <Userfollowing
                  route={props}
                  userData={this.state.profileData}
                  followingData={this.state.followingData}
                />
              )}
            />
            <Route
              exact
              path='/:username'
              render={(props) => (
                <Userdashboard
                  route={props}
                  userData={this.state.profileData}
                  reposData={this.state.reposData}
                />
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
