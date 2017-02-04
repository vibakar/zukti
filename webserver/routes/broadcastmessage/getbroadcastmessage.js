let express = require('express');
let router = express.Router();
let Broadcast = require('../../models/broadcast');
let UserNotificationCount = require('../../models/userNotificationCount');

//get broadcast messages saved in mongodb
router.get('/', function(req, res) {
    Broadcast.find(function(err, broadcast) {
        if (err)
            res.send(err);
        else
            res.json(broadcast);
    });
});
router.get('/count', function(req, res) {
    let email = req.user.local.email || req.user.facebook.email || req.user.google.email;
    let totalBroadCastCount = 0;
    Broadcast.count({}, function(err, count) {
        if (err) {
            console.log('ERROR WHILE RETRIVING NOTIFICATION COUNT');
        } else {
            totalBroadCastCount = count;
            console.log(totalBroadCastCount);
        }
    });
    console.log(totalBroadCastCount);
    UserNotificationCount.findOne({
        email: email
    }, function(err, data) {
        if (!data) {
            let userNotificationCount = new UserNotificationCount();
            userNotificationCount.email = email;
            userNotificationCount.count = 0;
            userNotificationCount.save(function(err) {
                if (err) {
                    console.log('Error in saving new user notification count');
                }
                res.json({
                    count: totalBroadCastCount-data.count
                });
            });
        } else {
            res.json({
                count: totalBroadCastCount - data.count
            });
        }
    })
});


module.exports = router;
