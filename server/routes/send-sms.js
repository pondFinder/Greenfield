// Justine's Twilio Info
var AccountSid = process.env.accountSid;
var AuthToken = process.env.authToken;

console.log(AccountSid);
console.log(AuthToken);

var Client = require('twilio')(AccountSid, AuthToken);
var dbHelpers = require('../utility/dbquery');

exports.sms = function(phoneData) {
  dbHelpers.getPhoneData({
    id: phoneData.id
  }, function(result) {
      // console.log('result in sms callback', result);

      // message to job accepter
      Client.messages.create({
        to: result.attributes.workerphone,
        // from: result.attributes.userphone,
        from: TwilioNumber,
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
      Client.messages.create({
        to: result.attributes.userphone,
        // from: result.attributes.userphone,
        from: TwilioNumber,
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
