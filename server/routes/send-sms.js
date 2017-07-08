// Justine's Twilio Info
var accountSid = process.env.accountSid;
var authToken = process.env.authToken;
var phoneNumber = process.env.phoneNumber;

var client = require('twilio')(accountSid, authToken);
var dbHelpers = require('../utility/dbquery');

exports.sms = function(phoneData) {
  dbHelpers.getWorkOrderData({
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
  //split message data to get back correct work order
  var data = messageData;
  var dataParsed = JSON.parse(data);
  console.log('parsed data:', JSON.stringify(dataParsed));
  console.log('sent data: ', data);
  var msgDataArray = dataParsed.Body.split('/');
  console.log(msgDataArray);
  dbHelpers.updateOrder({
    id: msgDataArray[0],
    notes: msgDataArray[1] + '\n',
    is_done: true
  }, function(model) {

    dbHelpers.getWorkOrderData({
      id: msgDataArray[0]
    }, function(modelData){
      sendMessage(modelData.attributes);
      cb(null, modelData.attributes); 
    });
  });
};

var sendMessage = function(workOrderInfo) {
  client.messages.create({
    to: workOrderInfo.userphone,
      // from: result.attributes.userphone,
    from: phoneNumber,
      // Wrong data, but testing
    body: `${workOrderInfo.workername} has completed your job! Info: ${workOrderInfo.job_info} (${workOrderInfo.id}) Notes: ${workOrderInfo.notes}`
    }, function(err, message) {
      if (err) {
        console.error(err);
      } else {
        // console.log('message object', message);
        console.log(message.sid);
      }
    });
}
