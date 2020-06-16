import React from "react";

class Singlerepo extends React.Component {
  render() {
    let repo = this.props.repoDetails;
    return repo ? (
      <div className='card m-1'>
        <div className='card-header'>{repo.name}</div>
        <div className='card-body'>
          <p className='card-text'>
            <strong>Repo Descritpiition :</strong> {repo.description}
          </p>
          <div className='row'>
            <span className='w-25 mx-3'>
              <strong>Size :</strong> {repo.size} Bytes
            </span>
            <span className='w-25'>
              <strong>Language :</strong> {repo.language}
            </span>
          </div>
        </div>
        <div className='card-footer d-flex'>
          <p>
            <strong>Created At :</strong> {repo.created_at}
          </p>
        </div>
      </div>
    ) : (
      <div className='card m-1'>
        <h6>Repocard Loading ...</h6>
      </div>
    );
  }
}

export default Singlerepo;
