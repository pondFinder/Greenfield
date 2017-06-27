angular.module('work-orders')

.controller('NewWorkOrderCtrl', function() {

})

.component('new-work-order', {
  controller: 'NewWorkOrderCtrl',
  bindings: {
    currentDate: '<'
  },
  templateUrl: '../templates/new-work-order.html'
});