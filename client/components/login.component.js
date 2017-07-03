angular.module('work-orders')

.controller('UserLoginCtrl', function($scope, loginService) {
  this.resetInputFields = function () {
    $scope.form.$setPristine();
    $scope.userName = '';
    $scope.userPass = '';
  };

  this.logUser = function () {
    var userData = {
      'username': $scope.userName,
      'password': $scope.userPass
    };

    loginService.validateUser(userData, function (loginRes) {
      if (loginRes === false) {
        $scope.loginRes = "Invalid username/password. Please try again!";
        this.resetInputFields();
      } else {
        this.parent.showContent();
        this.parent.showWorkOrders();
      }
    }.bind(this));
    // $scope.form.$dirty = false;

    // console.log($scope.form)

  }
})

.component('login', {
  require: {
    parent: '^^loginSignup'
  },
  controller: 'UserLoginCtrl',
  templateUrl: '../templates/login.component.html',
});