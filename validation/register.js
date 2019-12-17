const validator = require('validator');
const isEmpty = require('../validation/is-empty')
module.exports = function validateResgisterInput(data) {
    let err = {};
    data.name = !isEmpty(data.name) ? data.name : ''; 
    data.email = !isEmpty(data.email) ? data.email : ''; 
    data.password = !isEmpty(data.password) ? data.password : ''; 
    data.password1 = !isEmpty(data.password1) ? data.password1 : ''; 

    if(!validator.isLength(data.name, { min : 2, max : 30 })) {
        err.name = 'Name must be between 2 to 30';
    }   
    if(validator.isEmpty(data.name)) {
        err.name = 'Name field required'
    }
    if(validator.isEmpty(data.email)) {
        err.email = 'Email field required'
    }
    if(!validator.isEmail(data.email)) {
        err.email = 'Email is invalid'
    }
    if(validator.isEmpty(data.password)) {
        err.password = 'password field is required'
    }
    if(!validator.isLength(data.password, { min : 6, max : 30 })) {
        err.password = 'password must be between 6 to 30';
    }
    if(validator.isEmpty(data.password1)) {
        err.password1 = 'password field is required'
    }
    if(!validator.equals(data.password, data.password1)) {
        err.password1 = 'password must be match'; 
    }
    return {
        err,
        isValid: isEmpty(err)
    } 
}