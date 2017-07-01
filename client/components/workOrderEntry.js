angular.module('work-orders')

.controller('WorkOrderEntryCtrl', function(dataHandler) {


})

.component('workOrderEntry', {
  bindings: {
    order: '<',
    appGetWorkOrders: '<'
  },
  controller: 'WorkOrderEntryCtrl',
  templateUrl: '../templates/workOrderEntry.html'
});