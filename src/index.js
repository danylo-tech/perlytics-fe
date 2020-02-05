import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MobileApp from './MobileApp';
import Domain from './Domain';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import GoogleAuth from './GoogleAuth';

class AppRouter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: null,
    };
  }

  updateUserInfo = userInfo => {
    this.setState({ userInfo });
  };

  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/app/1">App</Link>
          </li>
        </ul>
        <GoogleAuth updateUserInfo={this.updateUserInfo} />
        <Route exact path="/" render={() => <App userInfo={this.state.userInfo} />} />
        <Route path="/app/:id" component={MobileApp} />
        <Route path="/domain/:id" component={Domain} />
      </div>
    );
  }
}

ReactDOM.render(
  <Router>
    <AppRouter />
  </Router>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
