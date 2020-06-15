import React from "react";
import Personcard from "./../components/Personcard";
class Following extends React.Component {
  render() {
    return (
      <div className='container'>
        <h3 className='m-3'>Mayank Followings :</h3>
        <div className='row'>
          <Personcard />
          <Personcard />
          <Personcard />
          <Personcard />
          <Personcard />
          <Personcard />
        </div>
      </div>
    );
  }
}

export default Following;
