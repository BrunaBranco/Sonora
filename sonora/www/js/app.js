
var app = angular.module('starter', ['ionic','ngCordova'])

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

app.controller('qrcodeController', function($scope, $cordovaBarcodeScanner) {
  $scope.scan = function(){
    cordova.plugins.barcodeScanner.scan(
      function (result) {
        if(!result.cancelled) {
          if(result.format == "QR_CODE") {
            responsiveVoice.speak(result.text, "Brazilian Portuguese Female");
            // window.alert(result.text);
            $scope.scan();
          }
        }
      },
      function (error) {
        alert("Scanning failed: " + error);
      },
      {
        preferFrontCamera : false, // iOS and Android
        showFlipCameraButton : true, // iOS and Android
        showTorchButton : true, // iOS and Android
        torchOn: true, // Android, launch with the torch switched on (if available)
        resultDisplayDuration: 50, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
        formats : "QR_CODE,PDF_417", // default: all but PDF_417 and RSS_EXPANDED
        orientation : "portrait", // Android only (portrait|landscape), default unset so it rotates with the device
      }
    );

    //   $cordovaBarcodeScanner.scan()
    //   .then(function(result) {
    //     // Success! Barcode data is here
    //     // responsiveVoice.speak(result.text, "Brazilian Portuguese Female");
    //     // window.alert(result.text);
    //     // $scope.scan();
    //     if(!result.cancelled) {
    //       if(result.format == "QR_CODE") {
    //         responsiveVoice.speak(result.text, "Brazilian Portuguese Female");
    //         // window.alert(result.text);
    //         $scope.scan();
    //       }
    //     }
    //   }, function(error) {
    //     // An error occurred
    //     alert("Scanning failed: " + error);
    //   }
    // );


  }
  // $scope.scan = function(scan){
  //   cordova.plugins.barcodeScanner.scan(
  //     function (result) {
  //       if(!result.cancelled)
  //       {
  //         if(result.format == "QR_CODE")
  //         {
  //           window.alert(result.text);
  //           responsiveVoice.speak(result.text, "Brazilian Portuguese Female");
  //           //responsiveVoice.speak("teste", "Brazilian Portuguese Female");
  //           $scope.scan();
  //         }
  //       }
  //     },
  //     function (error) {
  //       alert("Scanning failed: " + error);
  //     }
  //   );
  // };

})
