import React from "react";

class Singlerepo extends React.Component {
  render() {
    return (
      <div className='card m-1'>
        <div className='card-header'>Repository Name ...</div>
        <div className='card-body'>
          <p className='card-text'>
            Repo Descritpiition : Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Commodi quisquam eius omnis odit tempore
            praesentium cupiditate iusto dicta expedita, amet temporibus dolores
            numquam eligendi delectus.
          </p>
          <div className='row'>
            <span className='w-25 mx-3'>Size : 56562 Bytes</span>
            <span className='w-25'>Language : Python</span>
          </div>
        </div>
        <div className='card-footer d-flex'>
          <p>Created At : Date/sdfs/f/sfs/f/sd</p>
        </div>
      </div>
    );
  }
}

export default Singlerepo;
