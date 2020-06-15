import React from "react";

class Personcard extends React.Component {
  render() {
    return (
      <div className='card m-1 w-25'>
        <img
          className='card-img-top'
          src='https://via.placeholder.com/150'
          alt='Card image cap'
        />
        <div className='card-body'>
          <h5 className='card-title'>@username</h5>
          <a href='/username' className='btn btn-primary'>
            Github URL
          </a>
        </div>
      </div>
    );
  }
}

export default Personcard;
