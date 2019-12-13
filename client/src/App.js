import './App.css';
import Navbar from './pages/navbar/Navbar';
import DashBoard from './pages/dashboard/DashBoard';
import Drawer from './pages/navbar/Drawer';
import Backdrop from './pages/navbar/Backdrop';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React, { Component } from 'react';
import Sidedrawer from './pages/navbar/Sidedrawer';
import Footer from './pages/footer/Footer';
import Login from './pages/Login/Login';
import Register from './pages/register/Register'
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
    let sideDrawer;
    let backdrop;
    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClick} />
    }
    return (
      <div>
        <Router>
          <Navbar togglehandle={this.togglehandle} />
          <Drawer show={this.state.sideDrawerOpen} />
          {backdrop}
          <Switch>
              <Route exact path="/" component={DashBoard}></Route>
              <Route path="/login" component={Login}></Route>
              <Route path="/res" component={Register}></Route>
          </Switch>
          <Footer />
        </Router>
      </div>
    )
  }
}
export default App;
