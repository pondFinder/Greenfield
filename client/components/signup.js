angular.module('work-orders')

.controller('UserSignupCtrl', function($scope, loginService) {

  this.showLogin = function () {
    this.parent.isHidden = true;
  };

  this.createUser = function () {
    var userData = {
      first_name: $scope.firstName,
      last_name: $scope.lastName,
      username: $scope.userName,
      password: $scope.userPass,
      date: new Date()
    };

    loginService.postUser(userData, function (signUpRes) {
      if (signUpRes === false) {
        $scope.signUpRes = "There was an error signing up. Please try again!";
        console.log("error")
      } else {
        this.parent.showContent();
        console.log("success")
      }
    }.bind(this));

  }

  // this.showLogIn = function () {
  //   $scope.$parent.$ctrl.isLogInHidden = false;
  //   $scope.$parent.$ctrl.isSignUpHidden = true;
  // }
})

.component('signup', {
  require: {
    parent: '^^loginSignup'
  },
  controller: 'UserSignupCtrl',
  templateUrl: '../templates/signup.html',
});