angular.module('work-orders')

.controller('UserLoginCtrl', function($scope) {
  this.logUser = function () {
    // var userData = {'username': $scope.userName, 'password': $scope.userPass};
    // $scope.$parent.$ctrl.logUser(userData, function (loginRes) {
    //   if (loginRes === false) {
    //     $scope.loginRes = "Invalid username/password. Please try again!";
    //   }
    // });
    console.log('hey')
    $scope.$parent.$ctrl.showContent();
  }
})

.component('login', {
  controller: 'UserLoginCtrl',
  templateUrl: '../templates/login.html',
});