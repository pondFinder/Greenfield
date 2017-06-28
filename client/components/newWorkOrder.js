angular.module('work-orders')

.controller('NewWorkOrderCtrl', function() {

})

.component('newWorkOrder', {
  controller: 'NewWorkOrderCtrl',
  bindings: {
    currentDate: '<'
  },
  templateUrl: '../templates/newWorkOrder.html'
});