import React from "react";
import Followers from "../pages/Followers";
import Biocard from "./../components/Biocard";
import Axios from "axios";
class Userfollowers extends React.Component {
  state = {
    userData: {},
    followersData: [],
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
      Axios.get(`https://api.github.com/users/${username}/followers`).then(
        (fwer) => {
          // this.setState({
          //   userData: user.data,
          //   reposData: repos.data,
          // });
          let old = this.state;
          old.userData = user.data;
          old.followersData = fwer.data;
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
            <Followers followersData={this.state.followersData} />
          </div>
        </div>
      </div>
    ) : (
      <div className='container'>Followers Container Loading ...</div>
    );
  }
}

export default Userfollowers;
