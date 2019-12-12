import React, { Component } from 'react'
import './style.scss';
import Sidedrawer from './Sidedrawer';
import img2 from '../../images/img2.png'
class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }
    openMenu = () => {
        if(document.getElementsByClassName('mobile_toggle')) {
            console.log("Its working")
        }
    }
    render() {
        return (
            <header className="main_menu">
                <nav className="menu_nav">
                    <div className="sidebar_drawer">
                        <Sidedrawer click={this.props.togglehandle} />
                    </div>
                    <div className="menu_logo"><a href="#"><img src={img2} /></a></div>
                    <div className="spacer" />
                    <div className="menu_item">
                        <ul>
                            <li><a href="#">Student </a></li>
                            <li><a href="#">Teacher </a></li>
                            <li><a href="#">Study </a></li>
                            <li><a href="#">About </a></li>
                            {/* <li><button>Login</button></li> */}
                        </ul>
                    </div>
                </nav>
            </header>
            // <div className="main_h">
            //     {/* <div className="row">
            //         <a className="logo" href="#">P/F</a>
            //         <div className="mobile_toggle" onClick={this.openMenu}>
            //             <span></span>
            //             <span></span>
            //             <span></span>
            //         </div>
            //         <nav className="main_h">
            //             <ul>
            //                 <li><a href=".sec01">Section 01</a></li>
            //                 <li><a href=".sec02">Section 02</a></li>
            //                 <li><a href=".sec03">Section 03</a></li>
            //                 <li><a href=".sec04">Section 04</a></li>
            //             </ul>
            //         </nav>
            //     </div> */}
            // </div>
        )
    }
}
export default Navbar