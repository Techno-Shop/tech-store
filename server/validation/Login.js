const isEmpty = require('./isEmpty');
const validator = require('validator');

module.exports = function ValidateLogin(data){
    let errors = {};

    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";
   

    if(!validator.isEmail(data.email)){
        errors.email = "Required formated email";
    }
    if(validator.isEmpty(data.email)){
        errors.email = " email required";
    }
    if (validator.isEmpty(data.password)){
        errors.password = "password must not be empty";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
};