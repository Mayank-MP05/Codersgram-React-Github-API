import React from "react";
import Biocard from "./../components/Biocard";
import Following from "./../pages/Following";

class Userfollowing extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-4'>
            <Biocard userData={this.props.userData} />
          </div>
          <div className='col-8'>
            <Following followingData={this.props.followingData} />
          </div>
        </div>
      </div>
    );
  }
}

export default Userfollowing;
