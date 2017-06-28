angular.module('work-orders')

.controller('WorkOrderFeedCtrl', function() {
  this.createWorkOrder = (e) => {
    var queryObj = {
      job_info: this.woJobDetails,
      duration: this.woEstimatedDuration,
      client: this.woClientName, //make schema use string not ID (don't need clients table?)
      photo: this.woPhotoUrl
    };

    console.log(queryObj);

    //send HTTP POST to server to create new W.O.

  };
})

.component('workOrderFeed', {
  controller: 'WorkOrderFeedCtrl',
  templateUrl: '../templates/workOrderFeed.html'
});