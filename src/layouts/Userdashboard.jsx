import React from "react";
import Biocard from "./../components/Biocard";
import Repos from "../pages/Repos";
class Userdashboard extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-4'>
            <Biocard userData={this.props.userData} />
          </div>
          <div className='col-8'>
            <Repos reposData={this.props.reposData} />
          </div>
        </div>
      </div>
    );
  }
}

export default Userdashboard;
