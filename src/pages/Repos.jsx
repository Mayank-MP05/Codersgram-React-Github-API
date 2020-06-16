import React from "react";

import Singlerepo from "./../components/Singlerepo";

class Repos extends React.Component {
  render() {
    let repoList = this.props.reposData;
    let signal = false;
    if (repoList !== undefined) {
      if (Array.isArray(repoList)) {
        signal = true;
      }
    }
    //console.log(repoList);
    return (
      <div className='container'>
        <h3 className='m-3'>Repositories List :</h3>
        {signal ? (
          repoList.map((repo) => <Singlerepo repoDetails={repo} />)
        ) : (
          <h5>Repositories Loading ...</h5>
        )}
      </div>
    );
  }
}

export default Repos;
