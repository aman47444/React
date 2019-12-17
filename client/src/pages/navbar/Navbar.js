import React, { Component } from 'react'
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import './style.scss';
import { Link } from 'react-router-dom';
import Sidedrawer from './Sidedrawer';
import img2 from '../../images/img2.png'
import { logoutUser } from '../../actions/authAction'
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
        const { isAuthenticate, user } = this.props.auth;
        return (
            <header className="main_menu">
                <nav className="menu_nav">
                    <div className="sidebar_drawer">
                        <Sidedrawer click={this.props.togglehandle} />
                    </div>
                    <div className="menu_logo">
                        <Link to="/">
                            <li><img src={img2} /></li>
                            <li><span>Master-G</span></li>
                        </Link>    
                    </div>
                    <div className="spacer" />
                    <div className="menu_item">
                        <ul>
                            <li><a href="#">Student </a></li>
                            <li><a href="#">Tutors </a></li>
                            <li><a href="#">Material </a></li>
                            <li><a href="#">About </a></li>
                            <li><Link to="/login"><button>Login</button></Link></li>
                        </ul>
                    </div>
                </nav>
            </header>
        )
    }
}

Navbar.propTypes = {
    logoutUser: propTypes.func.isRequired,
    auth: propTypes.object.isRequired
}

const mapStateToProps = (state) =>({
    auth:state.auth
})

export default connect(mapStateToProps, { logoutUser })(Navbar);