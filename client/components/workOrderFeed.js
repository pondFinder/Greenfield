angular.module('work-orders')

.controller('WorkOrderFeedCtrl', function() {
  this.createWorkOrder = (e) => {
    console.log('button was pressed', e);
  };
})

.component('workOrderFeed', {
  controller: 'WorkOrderFeedCtrl',
  templateUrl: '../templates/workOrderFeed.html'
});