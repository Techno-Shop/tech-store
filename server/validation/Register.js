const isEmpty = require('./isEmpty');
const validator = require("validator");

module.exports = function ValidateRegister(data){
    let errors= {};
   
    data.username= !isEmpty(data.username) ? data.username : "";
    data.email= !isEmpty(data.email) ? data.email : "";
    data.password= !isEmpty(data.password) ? data.password: "";
    data.imageUrl= !isEmpty(data.imageUrl) ? data.imageUrl : "";
    data.confirm= !isEmpty(data.confirm) ? data.confirm : "";

    if(validator.isEmpty(data.username)){
        errors.username= "username must not be empty";
    }
    if(validator.isEmail(data.email)){
        errors.email= "Required format email";
    }

    if(validator.isEmpty(data.email)){
        errors.email= "email must not be empty";
    }

    if(validator.isEmpty(data.password)){
        errors.password= "password required";
    }
    if(validator.isEmpty(data.imageUrl)){
        errors.imageUrl= "picture required";
    }

    if(validator.equals(data.password, data.confirm)){
        errors.confirm= "required matched password";
    }

    if(validator.isEmpty(data.confirm)){
        errors.confirm= "confirmation required";
    }
    

    return {
        errors,
        isValid: isEmpty(errors)
    }
}