import React from "react";
import Personcard from "./../components/Personcard";

class Followers extends React.Component {
  render() {
    return (
      <div className='container'>
        <h3 className='m-3'>Mayank Followers :</h3>
        <div className='row'>
          <Personcard />
          <Personcard />
          <Personcard />
          <Personcard />
        </div>
      </div>
    );
  }
}

export default Followers;
