const Validator = require('validator');
const isEmpty = require('./is-empty');

const validateAdInput = (data) => {
    let errors = {};

    data.category = !isEmpty(data.category) ? data.category : "";
    data.subCategory = !isEmpty(data.subCategory) ? data.subCategory : "";
    data.title = !isEmpty(data.title) ? data.title : "";
    data.description = !isEmpty(data.description) ? data.description : "";
    data.contactName = !isEmpty(data.contactName) ? data.contactName : "";
    data.contactEmail = !isEmpty(data.contactEmail) ? data.contactEmail : "";
    data.specs = !isEmpty(data.specs) ? data.specs : [];
    data.images = !isEmpty(data.images) ? data.images : [];
    


    if (Validator.isEmpty(data.category)) {
        errors.category = "Category is required";
    }
    if (Validator.isEmpty(data.subCategory)) {
        errors.subCategory = "Sub Category is required";
    }
    if (Validator.isEmpty(data.title)) {
        errors.title = "Title is required";
    }
    if (Validator.isEmpty(data.description)) {
        errors.description = "Description is required";
    }
    if (Validator.isEmpty(data.contactName)) {
        errors.contactName = "Contact Name is required";
    }
    if (Validator.isEmpty(data.contactEmail)) {
        errors.contactEmail = "Contact Email is required";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
} 

module.exports = validateAdInput;