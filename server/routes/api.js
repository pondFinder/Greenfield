/*
 * Serve JSON to our AngularJS client
 */

var fileToServe = require('./../utility/paths');
var db = require('./../utility/dbquery');

exports.root = (req, res) => {
    res.status(200).send( fileToServe.paths.root );
};

exports.userSignUp = (req, res) => {
    var user = db.addUser(req.body);
    res.send(user);
};

exports.userSignIn = (req, res) => {
    var user = db.getUser(req.body);
    res.send(user);
};

exports.createOrder = (req, res) => {
    var order = db.createOrder(req.body);
    res.send(order);
};

exports.updateOrder = (req, res) => {
    var updatedOrder = db.updateOrder(req.body);
    res.send(updatedOrder);
};

exports.completeOrder = (req, res) => {
    var completedOrder = db.completeOrder(req.body);
    res.send(completedOrder);
};

exports.deleteOrder = (req, res) => {
    var deletedOrder = db.deleteOrder(req.body);
    res.send(deletedOrder);
};


