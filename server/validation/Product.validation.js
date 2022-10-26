const isEmpty=require("./isEmpty.js");
const validator=require("validator");
module.exports = function ValidateProduct(data) {
    let errors = {};
    data.name=!isEmpty(data.name) ? data.name: "" ;
    data.field = !isEmpty(data.field) ? data.field : "";
    data.price = !isEmpty(data.price) ? data.price : "";
    data.instock = !isEmpty(data.instock) ? data.instock : "";
    data.description = !isEmpty(data.description) ? data.description : "";
    data.image = !isEmpty(data.image) ? data.image : "";



    if(!validator.isName(data.name)){
      errors.name = "Name is required";
    }
   
      if (validator.isEmpty(data.field)) {
        errors.field = "Required field";
      }


      if (validator.isEmpty(data.price)) {
        errors.price = "Required price";
      }
      if (validator.isEmpty(data.instock)) {
        errors.instock = "Required instock";
      }
      if (validator.isEmpty(data.description)) {
        errors.description = "Required description";
      }


if(!validator.isName(data.image)){
      errors.image = "image is required";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
  };
    


