// load the things we need
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const CONFIG = require('../config/auth');
// define the schema for our user model
//let imgPath = '../../webclient/images/user.png';

const userSchema = mongoose.Schema({

    local: {
        token: String,
        firstname: String,
        lastname: String,
        email: String,
        password: String,
        authType: String,
        localType: String,
        name: String,
        loggedinStatus: Boolean,
        isEmailVerified: Boolean,
        verificationID: Number,
        photos: String
    },
    facebook: {
      id           : String,
      token        : String,
      email        : String,
      name         : String,
      displayName  : String,
      photos       : String,
      authType     : String

    },
    google: {
      id           : String,
      token        : String,
      email        : String,
      name         : String,
      displayName  : String,
      photos       : String,
      authType     : String
    }


});
userSchema.statics.generateToken = function(email) {
    let token = jwt.sign({
        id: email
    }, CONFIG.JWT.secret, {
        expiresIn: 15 * 60
    });
    return token;
};

// create the model for users and expose it to our app
module.exports = mongoose.model('user', userSchema);
