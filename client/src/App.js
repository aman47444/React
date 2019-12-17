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
import { Provider } from 'react-redux'
import store from './store'
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
              <Route path="/login" component={Login}></Route>
              <Route path="/signup" component={Register}></Route>
          </Switch>
          <Footer />
        </Router>
      </Provider>
    )
  }
}
export default App;
