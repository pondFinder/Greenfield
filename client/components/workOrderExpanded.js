angular.module('work-orders')

.controller('ExpandedOrderCtrl', function($http, dataHandler) {
  this.orderInformation = dataHandler.orderData;
  this.newNote;
  this.info;
  this.orderID = this.orderInformation.id;
  // this.orderInformation.notes = "hello my name is andrew";
  this.statusString = this.orderInformation.is_done ? "Complete" : "In Progress";
  var app = this;
  this.noteList = this.orderInformation.notes;
  this.testInformation;

  this.updateWorkOrder = function (data, cb) {

    $http.put('/update-order', data).
    then(function(res) {
      cb();
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
    app.getWorkOrders();
  }.bind(this);

  this.renderMessages = function() {
    this.noteList = this.orderInformation.notes;
    app.getWorkOrders();
  }.bind(this);

  this.submitNote = function(e){
    if(e.key === 'Enter'){
      this.orderInformation.notes = this.orderInformation.notes + '\n' + this.newNote;

      //reset the newNote model so the form empties after entering
      this.newNote = '';

      this.updateWorkOrder({
        id: this.orderID,
        notes: this.orderInformation.notes
      }, this.renderMessages)
    }
  }

  this.deleteWorkOrder = function (cb) {

    $http.delete('/delete-order/' + this.orderID)
    .then(function(res) {
      cb();
    });
  };

  this.doNothing = function(){
    console.log('Deleted from database')
  }.bind(this);

  this.deleteThisOrder = function() {
    if(confirm('Are you sure you want to delete this work order?')){
      this.deleteWorkOrder(this.doNothing)
    }else{
      console.log('it is not going to be deleted')
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
