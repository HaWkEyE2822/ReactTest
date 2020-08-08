const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: "Frist Name is required"
    },
    last_name: String,
    user_id: {
        type: String,
        require: "User ID is required"
    },
    email: {
        type: String,
        required: "Email address is required",
        trim: true,
        lowercase: true,
        validate: {
            validator: validateEmail(email),
            message: ({ email }) => `${email} is not valid`
        },
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password: {
        type: String,
        required: "Password is required"
    } 
});

const validateEmail = email => {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
};

module.exports = mongoose.model('User', userSchema);