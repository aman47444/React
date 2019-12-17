import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import './style.scss'
import { loginUser } from '../../actions/authAction'
class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            errors: {}
        }
    }
    componentWillReceiveProps(nextProps) {
        if(nextProps.auth.isAuthenticated) {
            this.props.history.push('/userdash');
        }
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors })
        }
    }
    componentDidMount() {
        if( this.props.auth.isAuthenticated) {
            this.props.history.push('/userdash');
        }
    }
    onChange = (e) => {
        this.setState({ [e.target.name ]: e.target.value });
    }
    onSubmit = (e) => {
        e.preventDefault();
        console.log("click login")
        const userData = {
            email: this.state.email,
            password: this.state.password
        }
        this.props.loginUser(userData);
    }
    render() {
        const { errors } = this.state;
        return (
            <div>
                <div className="container">
                    <form className="form-style" onSubmit={this.onSubmit}>
                        <div className="form-content">
                            <label htmlFor="inp" className="inp">
                                <input type="text" name="email" value={this.state.email} placeholder="Username" onChange={this.onChange} />
                                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                                <span className="border" />
                            </label>
                            <label htmlFor="inp" className="inp">
                                <input type="password" name="password" value={this.state.password} placeholder="Password" onChange={this.onChange} />
                                {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                                <span className="border" />
                            </label>
                        </div>
                        <div className="btn">
                            <button>Submit</button>
                            <Link to="/signup">Register</Link>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

Login.propTypes = {
    loginUser: propTypes.func.isRequired,
    auth: propTypes.object.isRequired,
    errors: propTypes.object.isRequired 
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
})
export default connect(mapStateToProps, { loginUser })(Login);