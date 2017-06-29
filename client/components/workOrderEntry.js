angular.module('work-orders')

.controller('WorkOrderEntryCtrl', function(dataHandler) {
  this.information = dataHandler.orderData;
})

.component('workOrderEntry', {
  binding: {
    order: "order"
  },
  controller: 'WorkOrderEntryCtrl',
  templateUrl: '../templates/workOrderEntry.html'
});