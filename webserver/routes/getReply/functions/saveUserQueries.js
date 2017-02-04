let UserChatHistory = require('../../../models/userChatHistory');
module.exports = function(email, question, resultArray) {
    UserChatHistory.findOne({
        email: email
    }, function(err, data) {
        if (!data) {
            let newUserChatHistory = new UserChatHistory();
            newUserChatHistory.email = email;
            let chat = {};
            chat.question = question;
            chat.resultArray = resultArray;
            newUserChatHistory.chats = [];
            newUserChatHistory.chats.push(chat);
            newUserChatHistory.save(function(err, data) {
                console.log('saved');
                console.log(data);
            });
        } else {
            let chat = {};
            chat.question = question;
            chat.resultArray = resultArray;
            data.chats.push(chat);
            data.save(function(err) {
                if (err) {
                    console.log('Error in saving chat');
                }
            });
        }
    });
};
