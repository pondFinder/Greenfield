angular.module('work-orders')

.controller('UserSignupCtrl', function($scope, loginService) {

  this.showLogin = function () {
    this.parent.isHidden = true;
  };

  this.createUser = function () {
    // this.destroyCurrentUser();
    var userData = {
      first_name: $scope.firstName,
      last_name: $scope.lastName,
      username: $scope.userName,
      password: $scope.userPass,
      photo: "assets/images/default-user-image.png", // sets a default photo for a user profile pic
      date: new Date()
    };

    loginService.postUser(userData, function (signUpRes) {
      if (signUpRes === false) {
        $scope.signUpRes = "There was an error signing up. Please try again!";
        console.log("error")
      } else {
        this.parent.showContent();
        this.parent.showWorkOrders();
        console.log("success")
      }
    }.bind(this));
  }
})

.component('signup', {
  require: {
    parent: '^^loginSignup'
  },
  controller: 'UserSignupCtrl',
  templateUrl: '../templates/signup.component.html',
});