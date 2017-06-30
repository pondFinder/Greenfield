angular.module('work-orders')


.controller('WorkOrderFeedCtrl', function($scope, $http, dataHandler) {
  $scope.orders;
  this.currentOrder;

  //Used to show the expanded work order view
  this.show = false;

  //Used to show error text if invalid fields were entered
  this.invalidFields = false;

  var app = this;

  this.expandOrder = function(order){
    dataHandler.setOrderInfo(order);
    this.show = !this.show;
    console.log($scope.orders)
  }

  this.toggle = function() {
    this.show = !this.show;
  }
  .bind(this);


  this.getWorkOrders = function () {
    // console.log("in get work orders")
    $http.get('/get-orders')
    .then(function(res) {
      app.workOrders = res.data;
      $scope.orders = app.workOrders;
      console.log(res.data);
    });
  }.bind(this);

  //Get work orders on page load.
  this.getWorkOrders();

  this.createWorkOrder = (e) => {
    // console.log('$ctrl model binds for work-order submit: ', this.woJobDetails, this.woEstimatedDuration, this.woClientName, this.woPhotoUrl);

    //Alert and return if all fields were not entered
    if (!this.woJobDetails || !this.woEstimatedDuration || !this.woPhotoUrl || !this.woClientName) {
      //set invalid fields boolean and immediately return.
      this.invalidFields = true;
      return;
    }

    //reset invalid fields boolean
    this.invalidFields = false;

    //create the current date for created_at
    var currentDate = new Date();

    var dateStr = currentDate.getFullYear() + '/' + currentDate.getMonth() + '/' + currentDate.getDate() + ' ' + currentDate.getHours() + ':' + currentDate.getMinutes() + ':' + currentDate.getSeconds();

    var queryObj = {
      notes: '',
      job_info: this.woJobDetails,
      created_at: dateStr,
      is_done: false,
      duration: this.woEstimatedDuration,
      client: this.woClientName, //make schema use string not ID (don't need clients table?)
      photo: this.woPhotoUrl,
    };

    this.sendNewOrder(queryObj, this.clearFields);


  };

  this.sendNewOrder = function (queryObj, cb) {
    //send HTTP POST to server to create new W.O.
    $http({
      method: 'POST',
      url: '/create-order',
      data: queryObj
    })
      .then(function successCallback(res) {
        cb();
      }, function errorCallback(res) {
        console.log('error creating new order!');
      });
  }.bind(this);

  this.clearFields = function () {
    //Clear all Fields when user clicks submit
    this.woClientName = '';
    this.woPhotoUrl = '';
    this. woJobDetails = '';
    this.woEstimatedDuration = '';

  }.bind(this);

})

.component('workOrderFeed', {
  bindings: {
    appGetWorkOrders: '<'
  },
  controller: 'WorkOrderFeedCtrl',
  templateUrl: '../templates/workOrderFeed.html'
});