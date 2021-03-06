import React from 'react';

class ListOfEatUp extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    var resultStuffs = this.props.sessions.map(result =>
      <div className="card card-block">
        <h4 className="card-title">{result.sessionname}</h4>
        <p className="card-text">{result.address}</p>
        <p className="card-text">Hosted by: {result.User.username}</p>
      </div>
      )
    return (
      <div>
        <h1 className="eatupTitle">EatUps around you!</h1>
        <ul className="list-group eatupsList">
          {resultStuffs}
        </ul>
      </div>
    )
  }
}

export default ListOfEatUp;
