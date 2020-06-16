import React from "react";
import Biocard from "./../components/Biocard";
import Following from "./../pages/Following";
import Axios from "axios";

class Userfollowing extends React.Component {
  state = {
    userData: {},
    followingData: [],
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
      Axios.get(`https://api.github.com/users/${username}/following`).then(
        (fwing) => {
          // this.setState({
          //   userData: user.data,
          //   reposData: repos.data,
          // });
          let old = this.state;
          old.userData = user.data;
          old.followingData = fwing.data;
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
            <Following followingData={this.state.followingData} />
          </div>
        </div>
      </div>
    ) : (
      <div className='container'>Following Container Loading ...</div>
    );
  }
}

export default Userfollowing;
