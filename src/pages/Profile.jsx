import React from "react";

class Following extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-4'>
            <img
              src='https://via.placeholder.com/150'
              alt=''
              className='w-100 p-3'
            />
          </div>
          <div className='col-8'>
            <div className='row'>
              <div className='card col-6'>Followers : 80</div>
              <div className='card col-6'>Followers : 100</div>
            </div>

            <div className='card'>Bio : Company : Place : Other Info From Api</div>
          </div>
        </div>
        <div className='row'>Starred Items</div>
        <div className='col'>
          <div className='card'>
            <div className='card-header'>Featured</div>
            <div className='card-body'>
              <h5 className='card-title'>Special title treatment</h5>
              <p className='card-text'>
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href='#' className='btn btn-primary'>
                Go somewhere
              </a>
            </div>
          </div>
          <div className='card'>
            <div className='card-header'>Featured</div>
            <div className='card-body'>
              <h5 className='card-title'>Special title treatment</h5>
              <p className='card-text'>
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href='#' className='btn btn-primary'>
                Go somewhere
              </a>
            </div>
          </div>
          <div className='card'>
            <div className='card-header'>Featured</div>
            <div className='card-body'>
              <h5 className='card-title'>Special title treatment</h5>
              <p className='card-text'>
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href='#' className='btn btn-primary'>
                Go somewhere
              </a>
            </div>
          </div>
          <div className='card'>
            <div className='card-header'>Featured</div>
            <div className='card-body'>
              <h5 className='card-title'>Special title treatment</h5>
              <p className='card-text'>
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href='#' className='btn btn-primary'>
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Following;
