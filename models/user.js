var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    username: {
        type: String
    },
    password: {
        type: String
    }          
});

var User = module.exports = mongoose.model("User", userSchema);