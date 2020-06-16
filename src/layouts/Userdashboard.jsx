import React from "react";
import Biocard from "./../components/Biocard";
import Repos from "../pages/Repos";
import Axios from "axios";

class Userdashboard extends React.Component {
  state = {
    userData: {},
    reposData: [],
    renderIT: false,
  };
  getUsername = () => {
    let user = this.props.route.match.params.username;
    console.log(user);
    return user;
  };

  componentWillMount() {
    let username = this.getUsername();
    Axios.get(`https://api.github.com/users/${username}`).then((user) => {
      Axios.get(`https://api.github.com/users/${username}/repos`).then(
        (repos) => {
          // this.setState({
          //   userData: user.data,
          //   reposData: repos.data,
          // });
          let old = this.state;
          old.userData = user.data;
          old.reposData = repos.data;
          old.renderIT = true;
          this.setState(old);
        }
      );
    });
  }
  render() {
    //console.log(this.props);
    return this.state.renderIT ? (
      <div className='container'>
        <div className='row'>
          <div className='col-4'>
            <Biocard userData={this.state.userData} />
          </div>
          <div className='col-8'>
            <Repos reposData={this.state.reposData} />
          </div>
        </div>
      </div>
    ) : (
      <div className='container'>Body Loading</div>
    );
  }
}

export default Userdashboard;
