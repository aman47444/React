import React, { Component } from 'react'
import './style.scss';
class Navbar extends Component {
    render() {
        return (
            <div className="main_h">
                <div class="row">
                    <a class="logo" href="#">P/F</a>
                    <div class="mobile-toggle">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <nav>
                        <ul>
                            <li><a href=".sec01">Section 01</a></li>
                            <li><a href=".sec02">Section 02</a></li>
                            <li><a href=".sec03">Section 03</a></li>
                            <li><a href=".sec04">Section 04</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        )
    }
}
export default Navbar