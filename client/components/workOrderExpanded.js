angular.module('work-orders')

.controller('ExpandedOrderCtrl', function(dataHandler) {
    this.orderInformation = dataHandler.orderData;
})

.component('workOrderExpanded', {
  bindings: {
    toggle: '<'
  },
  controller: 'ExpandedOrderCtrl',
  templateUrl: '../templates/workOrderExpanded.html'
});
