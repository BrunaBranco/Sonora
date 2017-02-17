// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
var app = angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }

      cordova.plugins.barcodeScanner.scan(
        function (result) {
          if(!result.cancelled)
          {
            if(result.format == "QR_CODE")
            {
              //window.alert(result.text);
              responsiveVoice.speak(result.text, "Brazilian Portuguese Female");
              //responsiveVoice.speak("teste", "Brazilian Portuguese Female");
              // $scope.scan();

            }
          }
        },
        function (error) {
          alert("Scanning failed: " + error);
        }
        // },
        // {
        //   preferFrontCamera : true, // iOS and Android
        //   showFlipCameraButton : true, // iOS and Android
        //   showTorchButton : true, // iOS and Android
        //   torchOn: true, // Android, launch with the torch switched on (if available)
        //   prompt : "Place a barcode inside the scan area", // Android
        //   resultDisplayDuration: 0, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
        //   formats : "QR_CODE,PDF_417", // default: all but PDF_417 and RSS_EXPANDED
        //   orientation : "landscape", // Android only (portrait|landscape), default unset so it rotates with the device
        //   disableAnimations : true, // iOS
        //   disableSuccessBeep: false // iOS
        // }
      );


  })

  app.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
    $ionicConfigProvider.tabs.position("bottom");
    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

    // setup an abstract state for the tabs directive
    .state('tab', {
      url: '/tab',
      abstract: true,
      templateUrl: 'templates/tabs.html'
    })

    // Each tab has its own nav history stack:

    .state('tab.dash', {
      url: '/dash',
      views: {
        'tab-dash': {
          templateUrl: 'templates/tab-dash.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })

    .state('tab.cadastrar', {
      url: '/cadastrar',
      views: {
        'cadastrar': {
          templateUrl: 'templates/cadastrar.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })

    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })

    .state('tab.pesquisar', {
      url: '/pesquisar',
      views: {
        'pesquisar': {
          templateUrl: 'templates/pesquisar.html',
          controller: 'ChatDetailCtrl'
        }
      }
    });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/tab/dash');

  });
