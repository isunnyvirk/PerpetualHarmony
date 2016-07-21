import React from 'react'
import { Link } from 'react-router';

//import AwesomeComponent from './AwesomeCompnent.jsx'

class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      //Defines the nav bar and different routes depending on clicks
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/SignIn">SignIn</Link>
          <Link to="/SignUp">SignUp</Link>
          <Link to="/Map">Map</Link>
        </nav>
        <div>
          <h1>Google Maps Page</h1>
        </div>
      </div>
    )
  }
}


export default Home;