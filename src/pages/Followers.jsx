import React from "react";
import Personcard from "./../components/Personcard";

class Followers extends React.Component {
  render() {
    let f_ersData = this.props.followersData;
    let signal = false;
    if (f_ersData !== undefined) {
      if (Array.isArray(f_ersData)) {
        signal = true;
      }
    }
    //console.log(repoList);
    return (
      <div className='container'>
        <h3 className='m-3'>Followers :</h3>
        <div className='row'>
          {signal ? (
            f_ersData.map((fer) => (
              <Personcard key={fer.node_id} personData={fer} />
            ))
          ) : (
            <h6>Followers Loading...</h6>
          )}
        </div>
      </div>
    );
  }
}

export default Followers;
