angular.module('work-orders')

.controller('AppCtrl', function($http) {

  var app = this;

  this.getWorkOrders = function () {
    $http.get('/get-orders')
    .then(function(res) {
      app.workOrders = res.data;
    });
  };

  this.updateWorkOrder = function (form) {
    var reqBody = angular.copy(form);
    $http.put('/update-order', reqBody).
    then(function(res) {
      console.log(res);
      app.getWorkOrders();
    });
  };

  this.deleteWorkOrder = function (order) {
    var reqBody = angular.copy(form);
    $http.delete('/delete-order')
    .then(function(res) {
      console.log(res);
      app.getWorkOrders();
    });
  };

  this.userSignUp = function (user) {
    var reqBody = angular.copy(form);
    $http.post('/user-signup');
  };

})

.component('app', {
  controller: 'AppCtrl',
  templateUrl: '../templates/app.html'
});
