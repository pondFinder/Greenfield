// Justine's Twilio Info
var accountSid = process.env.accountSid;
var authToken = process.env.authToken;
var phoneNumber = process.env.phoneNumber;

var client = require('twilio')(accountSid, authToken);
var dbHelpers = require('../utility/dbquery');

exports.sms = function(phoneData) {
  dbHelpers.getPhoneData({
    id: phoneData.id
  }, function(result) {
      console.log('result in sms callback', result);
      // message to job accepter
      client.messages.create({
        to: result.attributes.workerphone,
        // from: result.attributes.userphone,
        from: phoneNumber,
        body: `You've accepted a job: ${result.attributes.job_info}`
      }, function(err, message) {
        if (err) {
          console.error(err);
        } else {
          // console.log('message object', message);
          console.log(message.sid);
        }
      });

      // message to job poster/creater
      client.messages.create({
        to: result.attributes.userphone,
        // from: result.attributes.userphone,
        from: phoneNumber,
        // Wrong data, but testing
        body: `${result.attributes.workername} has accepted your job!`
      }, function(err, message) {
        if (err) {
          console.error(err);
        } else {
          // console.log('message object', message);
          console.log(message.sid);
        }
      });
  });

}

exports.message = function(messageData, cb) {
  console.log(messageData);
  cb(null, messageData);
};