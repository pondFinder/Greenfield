angular.module('work-orders')

.controller('NewsFeedCtrl', function($http) {
  var newsFeed = this;
  this.completedOrders = 0;
  this.inProgressOrders = 0;

  $http.get('get-orders-selective/0')
  .then(function (res) {
    console.log('RES', res);
    newsFeed.inProgressOrders = res.data.length;
  });

  $http({
    method: 'GET',
    url: 'get-orders-selective/1'
  })
  .then(function successCallback(res) {
    newsFeed.completedOrders = res.data.length;
    console.log('RES', res.data);
  }, function errorCallback(res) {
    console.log('error');
  });
})
.component('newsFeed', {
  controller: 'NewsFeedCtrl',
  templateUrl: '../templates/newsFeed.html'
});