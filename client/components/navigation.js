angular.module('work-orders')

.controller('NavCtrl', function() {
  this.date = Date().slice(0,16);
})

.component('navigation', {
  controller: 'NavCtrl',
  templateUrl: '../templates/navigation.html'
});
