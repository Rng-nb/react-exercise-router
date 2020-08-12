import React, {Component} from 'react';
import '../styles/App.css';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import Home from './Home';
import MyProfile from './MyProfile';
import AboutUs from './AboutUs';

class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <div>
            <ul className="linklist">
              <li>
                <Link to='/home' className="linkactive">Home</Link>
              </li>
              <li>
                <Link to='/my-profile' className="linkactive">My Profile</Link>
              </li>
              <li>
                <Link to='/about-us' className="linkactive">About Us</Link>
              </li>
            </ul>
          </div>
          <Switch>
            <Route path='/home' component={Home} />
            <Route path='/my-profile' component={MyProfile} />
            <Route path='/about-us' component={AboutUs} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
