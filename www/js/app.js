'use strict';

devLog('app LOADING-START (EmpDir)');


// Rest implementation relies on node.js and MongoDB being available.
// To start the Server hosting rest services, Go to the angular-directory/server folder and run:
//    1) npm install
//    2) node server



// Define the main application module 'myApp'.
//  Then make sure this gets assigned on the *.html page(s).  ie <html lang="en" ng-app="myApp">
//  App option:
//      1) Use 'myApp.memoryServices' for in memory data.
//      2) Use 'myApp.restServices' for rest implementation for data (uses MongoDB).
var myApp = angular.module('myApp', [
    'ngTouch',
    'ngRoute',
    'ngAnimate',
    'ajoslin.mobile-navigate',
    'myApp.services',
    'myApp.controllers',
    'myApp.memoryServices'
]);

/*
myApp.config(['$httpProvider', function($httpProvider) {
    devLog('app.config START1 *** *** *** *** ');
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
}]);
*/

/*
myApp.config(function($httpProvider) {
    devLog('app.config START2 *** *** *** *** ');
    //Enable cross domain calls
    $httpProvider.defaults.useXDomain = true;

    //Remove the header used to identify ajax call  that would prevent CORS from working
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
});
*/

// Register event-handlers at the very top scope ($rootScope)   (For learning/debugging purposes only)
myApp.run(function($rootScope) {
    // Listen for given events - coded in one line each to make it easy to comment-out
    $rootScope.$on('$locationChangeStart', function(event, newUrl, oldUrl) {    devLog('app event-reporting $locationChangeStart.. newUrl('+newUrl+') oldUrl('+oldUrl+')');  });
    $rootScope.$on('$locationChangeSuccess', function(event, newUrl, oldUrl) {  devLog('app event-reporting $locationChangeSuccess newUrl('+newUrl+') oldUrl('+oldUrl+')');  });
    $rootScope.$on('$includeContentRequested', function(event, a, b) {          devLog('app event-reporting $includeContentRequested a('+a+') b('+b+')');  });
    $rootScope.$on('$includeContentLoaded', function(event, a, b) {             devLog('app event-reporting $includeContentLoaded... a('+a+') b('+b+')');  });
    $rootScope.$on('$routeUpdate', function(event, a, b) {                      devLog('app event-reporting $routeUpdate....... a('+a+') b('+b+')');  });
    $rootScope.$on('$routeChangeStart', function(event, a, b) {                 devLog('app event-reporting $routeChangeStart.. ', a, b);  });
    $rootScope.$on('$routeChangeSuccess', function(event, a, b) {               devLog('app event-reporting $routeChangeSuccess ', a, b);  });
    $rootScope.$on('$routeChangeError', function(event, a, b) {                 devLog('app event-reporting $routeChangeError.. ', a, b);  });
    $rootScope.$on('$destroy', function(event, a, b) {                          devLog('app event-reporting $destroy ', a, b);  });
});


devLog('app Populating $routeProvider');
myApp.config(['$routeProvider', function ($routeProvider) {
    //Add the route definitions to the $route service
    $routeProvider.when('/', {templateUrl: 'partials/homeView.html', controller: 'HomeCtrl'});
    $routeProvider.when('/viewSendMessage', {templateUrl: 'partials/sendMessageView.html'});
    $routeProvider.when('/viewNotification', {templateUrl: 'partials/notificationView.html'});
    $routeProvider.when('/viewGeolocation', {templateUrl: 'partials/geolocationView.html'});
    $routeProvider.when('/viewAcceleration', {templateUrl: 'partials/accelerometerView.html'});
    $routeProvider.when('/viewDevice', {templateUrl: 'partials/deviceInfoView.html'});
    $routeProvider.when('/viewCamera', {templateUrl: 'partials/cameraView.html'});
    $routeProvider.when('/viewContacts', {templateUrl: 'partials/contactsView.html'});
    $routeProvider.when('/viewCompass', {templateUrl: 'partials/compassView.html'});
    $routeProvider.when('/viewHackerNews2', {templateUrl: 'partials/hackerNews2View.html'});
    $routeProvider.when('/viewHackerNews4', {templateUrl: 'partials/hackerNews4View.html'});
    $routeProvider.when('/employees', {templateUrl: 'partials/employee-list.html', controller: 'EmployeeListCtrl'});
    $routeProvider.when('/employees/:employeeId', {templateUrl: 'partials/employee-detail.html', controller: 'EmployeeDetailCtrl'});
    $routeProvider.when('/employees/:employeeId/reports', {templateUrl: 'partials/report-list.html', controller: 'ReportListCtrl'});

    //Set route definition that will be used on route change when no other route definition is matched.
    $routeProvider.otherwise( {redirectTo: '/'} );
}]);



var startingApp = {
    // Application Constructor
    initialize: function(theParams) {
        devLog('app startingApp.initialize START');
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        devLog('app startingApp.bindEvents START');
        if (DEVDEBUG) {
            var helperArea = document.getElementById('startingAppHelperId');
            if (helperArea) helperArea.innerHTML += "AddedDeviceReadyListener; "
        }
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    onDeviceReady: function() {
        devLog('app onDeviceReady START');
        if (DEVDEBUG) {
            var helperArea = document.getElementById('startingAppHelperId');
            if (helperArea) {
                helperArea.innerHTML += "DeviceReady; "
                helperArea.style.display='block';
            }
        }
        startingApp.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        devLog('app startingApp.receivedEvent id('+id+')');
    }
};

devLog('app LOADING-COMPLETED');