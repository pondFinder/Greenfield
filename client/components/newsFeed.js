angular.module('work-orders')

.controller('NewsFeedCtrl', function($http) {
  var newsFeed = this;

  // $http({
  //   method: 'GET',
  //   url: 'get-orders-selective/0'
  // })
  // .then(function (res) {
  //   newsFeed.inProgressOrders = res.data.length;
  // });

  // $http({
  //   method: 'GET',
  //   url: 'get-orders-selective/1'
  // })
  // .then(function successCallback(res) {
  //   newsFeed.completedOrders = res.data.length;
  // }, function errorCallback(res) {
  //   console.log('error');
  // });
})
.component('newsFeed', {
  bindings: {
    completeWorkOrders: '<',
    inProgressWorkOrders: '<'
  },
  controller: 'NewsFeedCtrl',
  templateUrl: '../templates/newsFeed.html'
});