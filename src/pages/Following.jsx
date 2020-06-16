import React from "react";
import Personcard from "./../components/Personcard";
class Following extends React.Component {
  render() {
    let f_wingData = this.props.followingData;
    let signal = false;
    if (f_wingData !== undefined) {
      if (Array.isArray(f_wingData)) {
        signal = true;
      }
    }
    //console.log(repoList);
    return (
      <div className='container'>
        <h3 className='m-3'>Following :</h3>
        <div className='row'>
          {signal ? (
            f_wingData.map((fer) => (
              <Personcard key={fer.node_id} personData={fer} />
            ))
          ) : (
            <h6>Following Loading...</h6>
          )}
        </div>
      </div>
    );
  }
}

export default Following;
