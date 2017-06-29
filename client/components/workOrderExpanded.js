angular.module('work-orders')

.controller('ExpandedOrderCtrl', function($http, dataHandler) {
  this.newNote;
  this.noteToAdd;
  this.info;
  this.orderInformation = dataHandler.orderData;
  this.orderID = this.orderInformation.id;
  this.orderInformation.notes = "hello my name is andrew";
  this.statusString = this.orderInformation.is_done ? "Complete" : "In Progress";
  var app = this;
  this.testInformation;

  this.updateWorkOrder = function (data, cb) {
    //console.log("inside updateWorkOrder");
    //console.log("LOOK HERE", app.getWorkOrders());
    $http.put('/update-order', data).
    then(function(res) {
      //console.log('in updateWorkOrder', res);
      cb();
      app.getWorkOrders();
    });
  };


  this.changeStatus = function() {
    this.orderInformation.is_done = !this.orderInformation.is_done;
    this.updateWorkOrder({
      id: this.orderID,
      is_done: this.orderInformation.is_done
    }, this.toggleStatusString)
  }

  this.toggleStatusString = function() {
    this.statusString = this.orderInformation.is_done ? "Complete" : "In Progress";
  }.bind(this);

  this.renderMessages = function() {
    this.orderInformation.notes = this.noteToAdd;
  }.bind(this);

  this.submitNote = function(e){
    if(e.key === 'Enter'){
      this.noteToAdd = this.orderInformation.notes + '\n' + this.newNote;
      this.updateWorkOrder({
        id: this.orderID,
        notes: this.noteToAdd
      }, this.renderMessages)
    }
  }
})

.component('workOrderExpanded', {
  bindings: {
    toggle: '<',
    getWorkOrders: '<'
  },
  controller: 'ExpandedOrderCtrl',
  templateUrl: '../templates/workOrderExpanded.html'
});
