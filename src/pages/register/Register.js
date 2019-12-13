import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.scss'
class Register extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <form className="form-style">
                        <div className="form-content">
                            <label htmlFor="inp" className="inp">
                                <input type="text" className="inp" placeholder="Name" />
                                <span className="border" />
                            </label>
                            <label htmlFor="inp" className="inp">
                                <input type="password" id="inp" placeholder="Eamil" />
                                <span className="border" />
                            </label>
                            <label htmlFor="inp" className="inp">
                                <input type="password" id="inp" placeholder="Password" />
                                <span className="border" />
                            </label>
                            <label htmlFor="inp" className="inp">
                                <input type="password" id="inp" placeholder="Confirm password" />
                                <span className="border" />
                            </label>
                        </div>
                        <div className="btn">
                            <button>Submit</button>
                            <Link to="/login">Login</Link>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
export default Register;