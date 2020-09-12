import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

const Home = () => {
    return (
      <Fragment>
        <div className="home-page">
          <div className="container">
            <h1>Activ8</h1>
            <Link to="/activities" className="home-page__link">Login</Link>
          </div>
        </div>
      </Fragment>
    )
}

export default Home;