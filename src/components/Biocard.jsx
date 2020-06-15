import React from "react";

class Biocard extends React.Component {
  render() {
    return (
      <div className='card'>
        <img
          className='card-img-top'
          src='http://via.placeholder.com/300'
          alt='Card image cap'
        />
        <div className='card-body'>
          <a href='./followers' className='btn btn-success m-3'>
            Followers | 10
          </a>
          <a href='./following' className='btn btn-danger'>
            Followings | 40
          </a>
          <h5 className='card-title'>Name : Mayank Pachpande</h5>
          <h6 className='card-title'>Username : @username</h6>
          <p className='card-text'>
            BIO : Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur, laudantium quae officiis commodi suscipit laborum
            ipsum veritatis aspernatur blanditiis perspiciatis, reiciendis ad
            non quia possimus quibusdam rem quaerat, culpa modi?
          </p>
        </div>
        <div className='card-footer'>Account Creation Date</div>
      </div>
    );
  }
}

export default Biocard;
