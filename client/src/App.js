import './App.css';
import Navbar from './pages/navbar/Navbar';
import DashBoard from './pages/dashboard/DashBoard';
import Drawer from './pages/navbar/Drawer';
import Backdrop from './pages/navbar/Backdrop';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React, { Component } from 'react';
import Footer from './pages/footer/Footer';
import Login from './pages/Login/Login';
import Register from './pages/register/Register'
import Userdash from './pages/userdash/Userdash';
import PrivateRoute from './pages/common/PrivateRoute';
import setAuthToken from './utills/setAuthToken';
import jwt_decode from 'jwt-decode';
import { Provider } from 'react-redux';
import { setCurrentUser, logoutUser} from './actions/authAction'
import store from './store'

if (localStorage.jwtToken) {
  // set auth token header auth 
  setAuthToken(localStorage.jwtToken);
  // decode token and get user info
  const decoded = jwt_decode(localStorage.jwtToken);

  store.dispatch(setCurrentUser(decoded));
  // check for expired Token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
      // logout user
      store.dispatch(logoutUser());
      // clear current user
      // store.dispatch(clearCurrentProfile()); // isko user ka profile banane k time kaam aayega

      window.location.href('/login');
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      sideDrawerOpen: false
    }
  }
  togglehandle = () => {
    this.setState((prestate) => {
      return {
        sideDrawerOpen: !prestate.sideDrawerOpen
      };
    })
  }
  backdropClick = () => {
    this.setState({ sideDrawerOpen: false })
  }
  render() {
    let backdrop;
    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClick} />
    }
    return (
      <Provider store={store}>
        <Router>
          <Navbar togglehandle={this.togglehandle} />
          <Drawer show={this.state.sideDrawerOpen} />
          {backdrop}
          <Switch>
              <Route exact path="/" component={DashBoard}></Route>
              <Route exact path="/login" component={Login}></Route>
              <Route exact path="/signup" component={Register}></Route>
              <PrivateRoute exact path="/userdash" component={Userdash}></PrivateRoute>
          </Switch>
          <Footer />
        </Router>
      </Provider>
    )
  }
}
export default App;
