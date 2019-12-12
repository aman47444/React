import './App.css';
import Navbar from './pages/navbar/Navbar';
import DashBoard from './pages/dashboard/DashBoard';
import Drawer from './pages/navbar/Drawer';
import Backdrop from './pages/navbar/Backdrop';

import React, { Component } from 'react';
import Sidedrawer from './pages/navbar/Sidedrawer';
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
    this.setState({sideDrawerOpen: false})
  }
  render() {
    let sideDrawer;
    let backdrop;
    if(this.state.sideDrawerOpen) {
      // sideDrawer = <Drawer />
      backdrop = <Backdrop click={this.backdropClick} />
    }
    return (
      <div className="App">
        <Navbar togglehandle = {this.togglehandle} />
        {/* {sideDrawer} */}
        <Drawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <DashBoard />
      </div>
    )
  }
}
export default App;
