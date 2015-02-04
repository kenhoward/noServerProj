var app = angular.module('firebaseLogin');

app.controller('LoginCtrl', function ($scope, authService, $location) {
  //Step 4 of Registration
  var loginCallback = function(user){
    user.uid = user.uid.replace('simplelogin:', '');
    $scope.$apply(function(){
      $location.path('/dashboard/' + user.uid) // 'dashboard' can be whatever we want it to be BUT  needs to be consistent with app.js
    });
  };

  $scope.login = function () { // clicking on login here
    return authService.login($scope.details, loginCallback); // look at fire authService.js // pass in those details
  };

  //Step 2 of Registration
  $scope.register = function () { // look at login.html under the register portion; view -> controller -> service
    return authService.register($scope.details, loginCallback);
  };

  $scope.status = 'Register';
  $scope.showReg = function(){
    if($scope.status === 'Register'){
      $scope.status = 'Login';
    } else {
      $scope.status = 'Register';
    }
    $scope.reg = !$scope.reg;
  };
});