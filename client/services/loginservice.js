angular.module('work-orders').
  service('login', function() {
    // when user inputs login details, verify user and log in
  this.logUser = function (userData, callback) {
    var reqBody = angular.copy(userData);
    app.curUser.username = userData.username;
    app.curUser.password = userData.password;

    $http.post('/user-signin', reqBody)
    .then(function(res) {
      if(res.data.username !== undefined) {
        if(res.data.username === userData.username && res.data.password === userData.password) {
          callback
        }
      } else {
        console.log('invalid username/password. Please try again');
        callback(false);
      }
    });
  };
});