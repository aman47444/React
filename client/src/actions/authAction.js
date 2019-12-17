import { GET_ERRORS,SET_CURRENT_USER } from './types';
import setAuthToken from '../utills/setAuthToken';
import jwt_decode from 'jwt-decode';
import Axios from 'axios';
export const registerUser = (userData,history) => dispatch => {
    Axios.post('/api/users/res', userData)
        .then(res => history.push('/login'))
        .catch(err => 
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        )

}
export const loginUser = (userData) => dispatch => {
    Axios.post('/api/users/login',userData)
    .then( res => {
        // save to localStorage
        const { token } = res.data;
        // set to localStorage
        localStorage.setItem('jwtToken',token);
        //set token to header
        setAuthToken(token);
        // decode token to get user data
        const decoded = jwt_decode(token);
        //set current user
        dispatch(setCurrentUser(decoded));
    })
    .catch( err => 
        dispatch({
        type: GET_ERRORS,
        payload: err.response.data
    }))
}


export const setCurrentUser = (decoded) => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    }
}

export const logoutUser = () => dispatch => {
    // Remove from localstorage
    localStorage.removeItem('jwtToken');

    // remove auth header for future request
    setAuthToken(false);
    // set current user to {} which will set authenticated to false
    dispatch(setCurrentUser({}));    
}