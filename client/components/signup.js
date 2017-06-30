angular.module('work-orders')

.controller('UserSignupCtrl', function($scope, $http, auth) {
  this.createUser = function () {
    var userData = {
      first_name: $scope.firstName,
      last_name: $scope.lastName,
      username: $scope.userName,
      password: $scope.userPass,
      date: new Date()
    };
    console.log(userData);
    // $scope.$parent.$ctrl.signUser(userData, function (signUpRes) {
    //   if (signUpRes === false) {
    //     $scope.signUpRes = "There was an error signing up. Please try again!";
    //   }
    // });
  }

  // this.showLogIn = function () {
  //   $scope.$parent.$ctrl.isLogInHidden = false;
  //   $scope.$parent.$ctrl.isSignUpHidden = true;
  // }
})

.component('signup', {
  controller: 'UserSignupCtrl',
  templateUrl: '../templates/signup.html'
});