var accountSid = 'AC64c4435aa19e0df4961bf331cba470b0';
var authToken = '5192cef1efa24cc8ca3228d9fbaeeab4';

var client = require('twilio')(accountSid, authToken);

client.messages.create({
  to: +19088789486,
  from: +14159429975,
  body: 'Testing SMS'
}, function(err, message) {
  if (err) {
    console.error(err);
  } else {
    // console.log('message object', message);
    console.log(message.sid);
  }
});
