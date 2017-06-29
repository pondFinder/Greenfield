angular.module('work-orders').
  service('dataHandler', function() {

    this.orderInformation = function(order){
      this.orderData = order;
      this.orderStatus
      if(this.orderData.is_done === false){
        this.orderStatus = 'In Progress';
      }else if (this.orderData.is_done === true){
        this.orderStatus = 'Complete';
      }
    }

  });