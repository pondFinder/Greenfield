angular.module('work-orders')

.controller('ExpandedOrderCtrl', function(dataHandler) {
    this.orderInformation = dataHandler.orderData
    this.close = function(){
      dataHandler.show = !dataHandler.show;
    }
    this.changeStatus = function(){
      //update the work order to have a is_done of whatever it is not
    }
})

.component('workOrderExpanded', {
  controller: 'ExpandedOrderCtrl',
  templateUrl: '../templates/workOrderExpanded.html'
});
