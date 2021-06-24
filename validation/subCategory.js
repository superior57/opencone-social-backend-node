const Validator = require("validator");
const isEmpty = require('./is-empty');

module.exports = function validateSubCategoryInput(data) {
    let errors = {};

    data.name = !isEmpty(data.name) ? data.name : "";

    if (Validator.isEmpty(data.name)) {
        errors.name = "Name field is required";
    }

    // if (Validator.isEmpty(data.categoryId)) {
    //     errors.categoryId = "CategoryId field is required";
    // }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}