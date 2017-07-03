angular.module('work-orders')

.controller('UserLoginCtrl', function($scope, loginService) {
  this.logUser = function () {
    var userData = {
      'username': $scope.userName,
      'password': $scope.userPass
    };

    loginService.validateUser(userData, function (loginRes) {
      if (loginRes === false) {
        $scope.loginRes = "Invalid username/password. Please try again!";
      } else {
        this.parent.showContent();
        this.parent.showWorkOrders();
      }
    }.bind(this));
    // console.log($scope.form)
    // $scope.form.$dirty = false;
    $scope.form.$setUntouched();

  }
})

.component('login', {
  require: {
    parent: '^^loginSignup'
  },
  controller: 'UserLoginCtrl',
  templateUrl: '../templates/login.component.html',
});