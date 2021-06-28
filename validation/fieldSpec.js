const Validator = require('validator');
const isEmpty = require('./is-empty');

const validateFieldSpecInput = (data) => {
    let errors = {};

    data.name = !isEmpty(data.name) ? data.name : "";
    // data.field = !isEmpty(data.field) ? data.field : "";

    if (Validator.isEmpty(data.name)) {
        errors.name = "Name field is required";
    }
    // if (Validator.isEmpty(data.field)) {
    //     errors.field = "Field id is required"
    // }

    return {
        errors,
        isValid: isEmpty(errors)
    }
} 

module.exports = validateFieldSpecInput;