import Axios from 'axios';
const setAuthToekn = token => {
    if(token) {
        // apply to every request
        Axios.defaults.headers.common['Authorization']  = token;
    }
    else {
        // delete auth headeer
        delete Axios.defaults.headers.common['Authorization'];
    }
}
export default setAuthToekn;