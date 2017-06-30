angular.module('work-orders')

.controller('LoginSignupCtrl', function($scope) {
  this.isHidden = false;

  this.showContent = function () {
    $scope.$parent.$ctrl.isContentHidden = false;
  };
})

.component('loginSignup', {
  controller: 'LoginSignupCtrl',
  templateUrl: '../templates/loginSignup.html',
  // bindings: {
  //   isContentHidden: "="
  // }
});