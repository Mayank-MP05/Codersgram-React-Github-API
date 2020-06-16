import React from "react";
import Followers from "../pages/Followers";

class Userfollowers extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-4'>
            <Biocard userData={this.props.userData} />
          </div>
          <div className='col-8'>
            <Followers reposData={this.props.followersData} />
          </div>
        </div>
      </div>
    );
  }
}

export default Userfollowers;
