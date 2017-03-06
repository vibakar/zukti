let User = require('./../../../models/user');
let setLoginDomain = function(email, domain) {
    User.findOneAndUpdate({
        'local.email': email
    }, {
        $set: {
            'local.loggedinDomain': domain
        }
    }, function(error) {
        if (error) {
            return 'LoggedinDomain not updated';
        }
        return 'LoggedinDomain updated successfully';
    });
};

module.exports = setLoginDomain;
