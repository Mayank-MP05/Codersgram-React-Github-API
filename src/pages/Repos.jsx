import React from "react";

import Singlerepo from "./../components/Singlerepo";

class Repos extends React.Component {
  render() {
    return (
      <div className='container'>
        <h3>Repositories by Mayank_MP5</h3>
        <Singlerepo />
        <Singlerepo />
        <Singlerepo />
        <Singlerepo />
      </div>
    );
  }
}

export default Repos;
