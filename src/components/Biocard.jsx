import React from "react";

class Biocard extends React.Component {
  render() {
    let profile = this.props.userData;
    return profile ? (
      <div className='card'>
        <img
          className='card-img-top'
          src={profile.avatar_url}
          alt='Card image cap'
        />
        <div className='card-body'>
          <a href='./followers' className='btn btn-success m-3'>
            Followers | {profile.followers}
          </a>
          <a href='./following' className='btn btn-danger'>
            Followings | {profile.following}
          </a>
          <h5 className='card-title'>Name : {profile.name}</h5>
          <h6 className='card-title'>Username : @{profile.login}</h6>
          <p className='card-text'>{profile.bio}</p>
        </div>
        <div className='card-footer'>
          Account Creation : {profile.created_at}
        </div>
      </div>
    ) : (
      <div className='card'>Profile Loading ...</div>
    );
  }
}

export default Biocard;
