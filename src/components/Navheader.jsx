import React from "react";

class Navheader extends React.Component {
  render() {
    return (
      <nav className='navbar navbar-light bg-primary'>
        <a className='navbar-brand' href='#'>
          <img
            src='https://via.placeholder.com/60'
            className='d-inline-block align-top'
            alt=''
          />
          Bootstrap
        </a>
      </nav>
    );
  }
}

export default Navheader;
