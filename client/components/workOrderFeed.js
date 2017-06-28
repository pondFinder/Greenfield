angular.module('work-orders')

.controller('WorkOrderFeedCtrl', function(dataHandler) {
  //bring in the work order data from the service
  this.orders = dataHandler.orderData;
  this.currentOrder;
  this.show = false;
  this.expandOrder = function(order) {
    this.currentOrder = order;
    this.show = !this.show;
  }
})

.component('workOrderFeed', {
  controller: 'WorkOrderFeedCtrl',
  templateUrl: '../templates/workOrderFeed.html'
});