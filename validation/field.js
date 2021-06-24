const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = ValidateFieldInput = (data) => {
    let errors = {};

    data.name = !isEmpty(data.name) ? data.name : "";
    data.type = !isEmpty(data.type) ? data.type : "";

    if (Validator.isEmpty(data.name)) {
        errors.name = "Name field is required";
    }
    if (Validator.isEmpty(data.type)) {
        errors.name = "Type field is required";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}