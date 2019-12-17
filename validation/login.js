const validator = require('validator');
const isEmpty = require('../validation/is-empty')
module.exports = function validateLoginInput(data) {
    let err = {};
    // data.name = !isEmpty(data.name) ? data.name : ''; 
    data.email = !isEmpty(data.email) ? data.email : ''; 
    data.password = !isEmpty(data.password) ? data.password : ''; 
  
    if(validator.isEmpty(data.email)) {
        err.email = 'Email field required'
    }
    if(!validator.isEmail(data.email)) {
        err.email = 'Email is invalid'
    }
    if(validator.isEmpty(data.password)) {
        err.password = 'Password field required'
    }
    return {
        err,
        isValid: isEmpty(err)
    } 
}