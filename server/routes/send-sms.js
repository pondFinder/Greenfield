// Justine's Twilio Info
var justineAccountSid = process.env.accountSid;
var justineAuthToken = process.env.authToken;

var justineClient = require('twilio')(justineAccountSid, justineAuthToken);
var dbHelpers = require('../utility/dbquery');

exports.sms = function(phoneData) {
  dbHelpers.getPhoneData({
    id: phoneData.id
  }, function(result) {
      // console.log('result in sms callback', result);

      // message to job accepter
      justineClient.messages.create({
        to: result.attributes.workerphone,
        // from: result.attributes.userphone,
        from: justineTwilioNumber,
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
      justineClient.messages.create({
        to: result.attributes.userphone,
        // from: result.attributes.userphone,
        from: justineTwilioNumber,
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
