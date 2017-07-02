//user profile
angular.module('work-orders')

.controller('UserProfileCtrl', function($scope, loginService) {
  this.userPhoto = (loginService.getCurrentUser()).photo;
  this.userFullName = loginService.getCurrentUser().first_name + ' ' + loginService.getCurrentUser().last_name;
  this.userName = loginService.getCurrentUser().username;

  this.curUser;
  this.isHidden = true;

  this.toggleUploadPhoto = function () {
    if ( this.isHidden ) {
      this.isHidden = false;
    } else {
      this.isHidden = true;
    }
  };

  this.getCurUser = function () {
    this.curUser = loginService.getCurrentUser();
  };

  this.uploadUserPhoto = function (photo) {
    this.getCurUser();
    // this.userPhoto = usrPhoto;
    var userData = {
      id: this.curUser.id,
      photo: photo
    };

    loginService.uploadUserPhoto(userData, function(res) {
      this.userPhoto = (loginService.getCurrentUser()).photo;
    }.bind(this));

    this.toggleUploadPhoto();
  };
})

.component('userProfile', {
  controller: 'UserProfileCtrl',
  templateUrl: '../templates/userProfile.html'
});