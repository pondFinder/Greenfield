angular.module('work-orders')

.controller('WorkOrderEntryCtrl', function(dataHandler) {


})

.component('workOrderEntry', {
  bindings: {
    order: '<'
  },
  controller: 'WorkOrderEntryCtrl',
  templateUrl: '../templates/workOrderEntry.html'
});