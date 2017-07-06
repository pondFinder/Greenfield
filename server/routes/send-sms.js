var accountSid = 'ACbd22420af5931bc35b903c1e55be8846';
var authToken = 'cecc4cc65213e24c96657e39e3fa92a3';

var client = require('twilio')(accountSid, authToken);

client.messages.create({
  to: +19088789486,
  from: +19085214551,
  body: 'Testing SMS'
}, function(err, message) {
  if (err) {
    console.error(err);
  } else {
    // console.log('message object', message);
    console.log(message.sid);
  }
});
