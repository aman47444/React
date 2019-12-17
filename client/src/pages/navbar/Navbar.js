import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './style.scss';
import { Link } from 'react-router-dom';
import Sidedrawer from './Sidedrawer';
import img2 from '../../images/img2.png'
import { logoutUser } from '../../actions/authAction';
class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }
    componentWillMount() {
        document.addEventListener('mousedown',this.handleClick,false);
    }
    componentWillUnmount() {
        document.removeEventListener('mousedown',this.handleClick, false)
    }
    handleClick = () => {
        
    }
    openMenu = () => {
        if (document.getElementsByClassName('mobile_toggle')) {
            console.log("Its working")
        }
    }
    handleProfile = () => {
        if(document.getElementsByClassName('submenu')) {
            document.getElementsByClassName('submenu').style.display = 'block';
        }
    }
    onLogoutClick = (e) => {
        e.preventDefault();
        this.props.logoutUser();
    }
    render() {
        const { isAuthenticated, user } = this.props.auth;
        const authLink = (
            <div className="log-div">
                <button onClick={this.onLogoutClick} classname="lgout_btn">Logout</button>
                {/* <div className="dropdown">
                    <Link className="account" onClick={this.handleProfile}>
                        <div style={{color:'white', fontSize:'18px'}}>{user.name}</div>
                    </Link>
                    <div className="submenu" id="profilemenu">
                        <ul className="root">
                            <li>
                                <Link>Your Dashboard</Link>
                            </li>
                            <li>
                                <Link>Edit Profile</Link>
                            </li>
                            <li>
                                <Link>Logout</Link>
                            </li>
                        </ul>
                    </div>
                </div> */}

            </div >
        );
        const guestLink = (
            <div className="log-div">
                <Link to="/login"><button>Login</button></Link>
            </div>
        )
        return (
            <header className="main_menu">
                <nav className="menu_nav">
                    <div className="sidebar_drawer">
                        <Sidedrawer click={this.props.togglehandle} />
                    </div>
                    <div className="menu_logo">
                        <Link to="/">
                            <li><img src={img2} alt={user.name}/></li>
                            <li><span>Master-G</span></li>
                        </Link>
                    </div>
                    <div className="spacer" />
                    <div className="menu_item">
                        <ul>
                            <li><Link>Student</Link></li>
                            <li><Link>Tutors</Link></li>
                            <li><Link>Material</Link></li>
                            <li><Link>About</Link></li>
                            <li>{isAuthenticated ? authLink : guestLink}</li>
                        </ul>
                    </div>
                </nav>
            </header>
        )
    }
}

Navbar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth,
})

export default connect(mapStateToProps, { logoutUser })(Navbar);