angular.module('work-orders')

.controller('WorkOrderEntryCtrl', function(dataHandler) {

})

.component('workOrderEntry', {
  bindings: {
    order: '<',
    appGetWorkOrders: '<',
    index: '<'
  },
  controller: 'WorkOrderEntryCtrl',
  templateUrl: '../templates/workOrderEntry.html'
});