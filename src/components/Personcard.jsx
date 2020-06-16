import React from "react";
import { Link } from "react-router-dom";
import "./personcard.css";
class Personcard extends React.Component {
  render() {
    let person = this.props.personData;
    return person ? (
      <div className='card m-1 w-30'>
        <img
          className='card-img-top'
          src={person.avatar_url}
          alt='Card image cap'
        />
        <div className='card-body'>
          <h5 className='card-title'>@{person.login}</h5>
          <Link to={`/${person.login}`} className='btn btn-primary'>
            {person.html_url}
          </Link>
        </div>
      </div>
    ) : (
      <div className='card m-1 w-25'>Personcard Loading ...</div>
    );
  }
}

export default Personcard;
