// load the things we need
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const CONFIG = require('../config/auth');
const bcrypt = require('bcrypt-nodejs')

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
        photos: String,
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
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

// create the model for users and expose it to our app
module.exports = mongoose.model('user', userSchema);
