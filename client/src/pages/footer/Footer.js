import React, { Component } from 'react'
import './style.scss';
class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="part">
                    <h3>Quick Link</h3>
                </div>
                <div className="part">
                    <h3>Enquiry</h3>
                </div>
                <div className="part">
                    <h3>Contact Us</h3>
                </div>
            </div>
        )
    }
}
export default Footer;