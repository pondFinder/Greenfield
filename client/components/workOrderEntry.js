angular.module('work-orders')

.controller('WorkOrderEntryCtrl', function(dataHandler) {
    this.information = dataHandler.orderData;
})

.component('workOrderEntry', {
  controller: 'WorkOrderEntryCtrl',
  templateUrl: '../templates/workOrderEntry.html'
});