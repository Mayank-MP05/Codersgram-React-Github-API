import React from "react";
import Followers from "../pages/Followers";
import Biocard from "./../components/Biocard";

class Userfollowers extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-4'>
            <Biocard userData={this.props.userData} />
          </div>
          <div className='col-8'>
            <Followers followersData={this.props.followersData} />
          </div>
        </div>
      </div>
    );
  }
}

export default Userfollowers;
