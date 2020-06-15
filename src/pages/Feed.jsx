import React from "react";

import Navheader from "./../components/Navheader";
import Navfooter from "./../components/Navfooter";

class Feed extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navheader />
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
        <Navfooter />
      </React.Fragment>
    );
  }
}

export default Feed;
