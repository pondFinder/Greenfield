var helpers = require('../server/utility/dbquery.js');
// 'use strict';

// /* Services */
// var paths = {
//   root: 'http://138.68.248.38:8080/'
// }

// // Demonstrate how to register services
// // In this case it is a simple value service.
// angular.module('work-orders').
//   service('indexService', function($http) {
//     this.renderIndex = function(callback) {
//       $http.get(paths.root).then(function(data) {
//         callback(data.file);
//       })
//     }
//   });

angular.module('work-orders').
  service('dataHandler', function() {
    //access the order data here
    this.orderData = helpers.getOrders(function(model){
      return model;
    })
  })