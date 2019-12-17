import React, { Component } from 'react';
import classnames from 'classnames'
import { Link,withRouter } from 'react-router-dom';
import propTypes from 'prop-types';
import './style.scss';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authAction';
class Register extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            password: '',
            password1: '',
            errors: {}
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors })
        }
    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    onSubmit = (e) => {
        e.preventDefault();
        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password1: this.state.password1
        }
        this.props.registerUser(newUser, this.props.history);
    }
    render() {
        const { errors } = this.state;
        return (
            <div>
                <div className="container">
                    <form className="form-style" onSubmit={this.onSubmit}>
                        <div className="form-content">
                            <label htmlFor="inp" className="inp">
                                <input type="text" name="name" value={this.state.name} className={classnames('inp',{'is-invalid':errors.name})} placeholder="Name" onChange={this.onChange} />
                                {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                                <span className="border" />
                            </label>
                            <label htmlFor="inp" className="inp">
                                <input type="email" name="email" value={this.state.email} className={classnames('inp',{'is-invalid':errors.email})} placeholder="Eamil" onChange={this.onChange}/>
                                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                                <span className="border" />
                            </label>
                            <label htmlFor="inp" className="inp">
                                <input type="password" name="password" value={this.state.password} id="inp" placeholder="Password" onChange={this.onChange}/>
                                {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                                <span className="border" />
                            </label>
                            <label htmlFor="inp" className="inp">
                                <input type="password" name="password1" value={this.state.password1} id="inp" placeholder="Confirm password" onChange={this.onChange}/>
                                {errors.password1 && <div className="invalid-feedback">{errors.password1}</div>}
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

Register.propTypes = {
    registerUser: propTypes.func.isRequired,
    auth: propTypes.object.isRequired,
    errors: propTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth:state.auth,
    errors: state.errors
})

export default connect(mapStateToProps, {registerUser})(withRouter(Register));