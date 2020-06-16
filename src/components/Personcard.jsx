import React from "react";

class Personcard extends React.Component {
  render() {
    let person = this.props.personData;
    return person ? (
      <div className='card m-1 w-25'>
        <img
          className='card-img-top'
          src={person.avatar_url}
          alt='Card image cap'
        />
        <div className='card-body'>
          <h5 className='card-title'>@{person.login}</h5>
          <a href={person.html_url} className='btn btn-primary'>
            {person.html_url}
          </a>
        </div>
      </div>
    ) : (
      <div className='card m-1 w-25'>Personcard Loading ...</div>
    );
  }
}

export default Personcard;
