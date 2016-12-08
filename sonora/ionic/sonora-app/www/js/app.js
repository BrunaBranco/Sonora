// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

app.controller('mainController', function($scope, $ionicPopup, $ionicListDelegate, $http){
  $scope.texto;
  $scope.scan = function(){
    cordova.plugins.barcodeScanner.scan(
      function (result) {
        if(!result.cancelled)
        {
          if(result.format == "QR_CODE")
          {
            window.alert(result.text);
            responsiveVoice.speak("teste", "Brazilian Portuguese Female");
            responsiveVoice.speak("teste", "Brazilian Portuguese Female");

          }
        }
      },
      function (error) {
        alert("Scanning failed: " + error);
      }
    );
  };

  $scope.scan2 = function(){
    responsiveVoice.speak("teste", "Brazilian Portuguese Female");
    responsiveVoice.speak("teste", "Brazilian Portuguese Female");
  };

  $scope.rfid = function(texto){
    responsiveVoice.speak(texto, "Brazilian Portuguese Female");
  };

  $scope.tag = {};

    $scope.postTag = function(){
       $http.post('https://api.mlab.com/api/1/databases/iflab/collections/usuario?apiKey=XRSrAQkYZvpYR1cLVVbR5rknsPC0hZff', $scope.tag)
      .success(function(response){
        console.log(response);
        angular.forEach(response, function(carregar){
          $scope.playlists.push(carregar);
        });
      });

      $scope.tag = {};

    }




});





