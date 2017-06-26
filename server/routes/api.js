/*
 * Serve JSON to our AngularJS client
 */

var fileToServe = require('../utility/paths');
var dbHelpers = require('../utility/dbquery');

exports.root = (req, res) => {
  res.status(200).send( fileToServe.paths.root );
};

exports.userSignUp = (req, res) => {

  dbHelpers.addUser(req.body, (user) => {
    res.send(user);
  });


};

exports.userSignIn = (req, res) => {
  dbHelpers.getUser(req.body, (user) => {
    res.send(user);
  });

};

exports.createOrder = (req, res) => {
  dbHelpers.createOrder(req.body, (order) => {
    res.send(order);
  });

};

exports.updateOrder = (req, res) => {
  dbHelpers.updateOrder(req.body, (order) => {
    res.send(order);
  });

};

exports.getOrders = (req, res) => {
    dbHelpers.getOrders((orders) => {
        res.send(orders);
    });
};

exports.deleteOrder = (req, res) => {
  dbHelpers.deleteOrder(req.body, (order) => {
    res.send(order);
  });

};


