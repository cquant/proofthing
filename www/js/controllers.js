'use strict';

devLog('controllers LOADING-START');

var myControllers = angular.module('myApp.controllers', ['ngResource']);

/*
myControllers.config(['$httpProvider', function($httpProvider) {
    devLog('controllers.config START1 *** *** *** *** ');
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
}]);
*/

/*
myControllers.config(function($httpProvider) {
    devLog('controllers.config START2 *** *** *** *** ');
    //Enable cross domain calls
    $httpProvider.defaults.useXDomain = true;

    //Remove the header used to identify ajax call  that would prevent CORS from working
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
});
*/

myControllers.controller('MainCtrl', ['$scope', '$rootScope', '$window', '$location', function ($scope, $rootScope, $window, $location) {
        devLog('controllers.MainCtrl START');
        $scope.slide = '';

        // The back button has been invoked
        $rootScope.back = function() {
          devLog('controllers.MainCtrl $rootScope.back $scope.slide(slide-right)');
          $scope.slide = 'slide-right';
          $window.history.back();
        }

        // A GO-somewhere action has been invoked
        $rootScope.go = function(path) {
          devLog('controllers.MainCtrl $rootScope.go $scope.slide(slide-left) path('+path+')');
          $scope.slide = 'slide-left';
          $location.url(path);
        }
    }]);

myControllers.controller('HomeCtrl', ['$scope', 'navSvc', '$rootScope', function ($scope, navSvc, $rootScope) {
        devLog('controllers.HomeCtrl START');
        $rootScope.showSettings = false;
        $scope.slidePage = function (path, type) {
            devLog('controllers.HomeCtrl.slidePage START path('+path+') type('+type+')');
            navSvc.slidePage(path,type);
        };
        $scope.back = function () {
            devLog('controllers.HomeCtrl.back START');
            navSvc.back();
        };
        $scope.changeSettings = function () {
            devLog('controllers.HomeCtrl.changeSettings START');
            $rootScope.showSettings = true;
        };
        $scope.closeOverlay = function () {
            devLog('controllers.HomeCtrl.closeOverlay START');
            $rootScope.showSettings = false;
        };
    }]);

myControllers.controller('NotificationCtrl', ['$scope', function ($scope) {
    devLog('controllers.NotificationCtrl START');

    // Initialize only once per scope.
    devLog('controllers.NotificationCtrl $scope.notification...'+$scope.notification);
    if (!$scope.notification) {
        $scope.notification = {alertTitle: 'My title',
                               alertMessage: 'My alert msg.',
                               confirmationTitle: 'Are you sure?',
                               confirmationMessage: 'My confirmation msg.'
                              };
    }

    $scope.alertNotify = function() {
        devLog('controllers.NotificationCtrl.alertNotify START');
        if (navigator && navigator.notification && navigator.notification.alert) {
            navigator.notification.alert($scope.notification.alertMessage, function() {devLog("navigator.notification.alert callback success")}, $scope.notification.alertTitle, "Close");
        } else {
            devLog('controllers.NotificationCtrl.alertNotify Invalid navigator.notification.alert object.');
            alert('Javascript alert in use. Check for proper configuration/installation. \n\n' +
                  'Heading: ' + $scope.notification.alertTitle + '\n' +
                  'Body: ' + $scope.notification.alertMessage);
        }
    };
    $scope.beepNotify = function() {
        devLog('controllers.NotificationCtrl.beepNotify START');
        navigator.notification.beep(1);
    };
    $scope.vibrateNotify = function() {
        devLog('controllers.NotificationCtrl.vibrateNotify START');
        navigator.notification.vibrate(3000);
    };
    $scope.confirmNotify = function() {
        devLog('controllers.NotificationCtrl.confirmNotify START');
        if (navigator && navigator.notification && navigator.notification.confirm) {
            navigator.notification.confirm($scope.notification.confirmationMessage, function(){devLog("navigator.notification.confirm callback success")}, $scope.notification.confirmationTitle, ["Ok","Cancel"]);
        } else {
            alert('Javascript alert in use. Check for proper configuration/installation. \n\n' +
                'Heading: ' + $scope.notification.confirmationTitle + '\n' +
                'Body: ' + $scope.notification.confirmationMessage);
        }
    };
}]);

myControllers.controller('GeolocationCtrl', ['$scope', 'navSvc', '$rootScope' , function ($scope, navSvc, $rootScope) {
    devLog('controllers.GeolocationCtrl START');
    devLog('controllers.GeolocationCtrl navigator('+navigator+')');
    devLog('controllers.GeolocationCtrl navigator.geolocation('+navigator.geolocation+')');
    navigator.geolocation.getCurrentPosition(function(position) {
        devLog('controllers.GeolocationCtrl.getCurrentPosition START');
        $scope.position=position;
        $scope.$apply();
    },function(e) { console.log("Error retrieving position " + e.code + " " + e.message) });

    $scope.back = function () {
        devLog('controllers.GeolocationCtrl.back START');
        navSvc.back();
    };
}]);

myControllers.controller('AccelerCtrl', ['$scope', function ($scope) {
    devLog('controllers.AccelerCtrl START');
    devLog('controllers.AccelerCtrl navigator('+navigator+')');
    devLog('controllers.AccelerCtrl navigator.accelerometer('+navigator.accelerometer+')');
    navigator.accelerometer.getCurrentAcceleration(function (acceleration) {
        devLog('controllers.AccelerCtrl.getCurrentAcceleration START');
        $scope.acceleration  = acceleration;
    },function(e) { console.log("Error finding acceleration " + e) });
}]);

myControllers.controller('DeviceCtrl', ['$scope', function ($scope) {
    devLog('controllers.DeviceCtrl START');
    $scope.device = device;
}]);

myControllers.controller('CompassCtrl', ['$scope', function ($scope) {
    devLog('controllers.CompassCtrl START');
    navigator.compass.getCurrentHeading(function (heading) {
        $scope.heading  = heading;
        $scope.$apply();
    },function(e) { console.log("Error finding compass " + e.code) });
}]);


myControllers.controller('HackerNews2Ctrl', ['$scope', '$rootScope', 'HackerNewsSvc', function ($scope, $rootScope, HackerNewsSvc) {
    devLog('controllers.HackerNews2Ctrl START');
    // Load in data from hacker news unless we already have
    if (!$rootScope.hackerItems2) {
        devLog('controllers.HackerNews2Ctrl data get next');
        $rootScope.hackerItems2 = {};
        HackerNewsSvc.get({}, function(response) {
            // Assign the response INSIDE the callback
            devLog('controllers.HackerNews2Ctrl data returned. ' + JSON.stringify(response));
            $rootScope.hackerItems2 = response.items;
            $scope.$apply();
        }, function(responseErr) {
            devLog('controllers.HackerNews2Ctrl responseErr. ' + JSON.stringify(responseErr));
        });
     } else {
        devLog('controllers.HackerNews2Ctrl data already loaded');
    }

    $scope.loadItem = function(item) {
        devLog('controllers.HackerNews2Ctrl.loadItem  item('+item+')');
        navigator.notification.alert(item.url,function() {devLog("Alert success")},"The URL...","Close");
    };
}]);

myControllers.controller('HackerNews4Ctrl', ['$scope', '$rootScope', 'HackerDataSvc', function ($scope, $rootScope, HackerDataSvc) {
    devLog('controllers.HackerNews4Ctrl START');
    // Load in data from hacker news unless we already have
    devLog('controllers.HackerNews4Ctrl before $rootScope.hackerLocalItems='+$rootScope.hackerLocalItems);
    if (!$rootScope.hackerLocalItems) {
        devLog('controllers.HackerNews4Ctrl data get next');
        $rootScope.hackerLocalItems = {};
        HackerDataSvc.get({}, function(response) {
            // Assign the response INSIDE the callback
            devLog('controllers.HackerNews4Ctrl data returned. \n' + JSON.stringify(response));
            $rootScope.hackerLocalItems = response.items;
        }, function(responseErr) {
            devLog('controllers.HackerNews4Ctrl the other method responseErr. ' + JSON.stringify(responseErr));
        });
    } else {
        devLog('controllers.HackerNews4Ctrl data already loaded');
    }
    devLog('controllers.HackerNews4Ctrl End Locator');

    $scope.loadItem = function(item) {
        devLog('controllers.HackerNews4Ctrl.loadItem  item('+item+')');
        if (navigator && navigator.notification && navigator.notification.alert) {
            navigator.notification.alert(item.url, function() {devLog("Alert success")},"The URL...","Close");
        } else {
            alert('The URL ... \n\n' + item.url);
        }
    };
}]);



myControllers.controller('ContactsCtrl', ['$scope', function ($scope) {
    devLog('controllers.ContactsCtrl START');

    $scope.find = function() {
        $scope.contacts = [];

        var options = new ContactFindOptions();
        //options.filter=""; //returns all results
        options.filter=$scope.searchTxt;
        options.multiple=true;
        var fields = ["displayName", "name", "phoneNumbers"];
        navigator.contacts.find(fields, function(contacts) {
            $scope.contacts=contacts;
            $scope.$apply();
        },function(e){console.log("Error finding contacts " + e.code)},options);
    }
}]);

myControllers.controller('CameraCtrl', ['$scope', function ($scope) {
    devLog('controllers.CameraCtrl START');
    $scope.takePic = function() {
        var options =   {
            quality: 50,
            destinationType: Camera.DestinationType.DATA_URL,
            sourceType: 1,      // 0:Photo Library, 1=Camera, 2=Saved Photo Album
            encodingType: 0     // 0=JPG 1=PNG
        }
        // Take picture using device camera and retrieve image as base64-encoded string
        navigator.camera.getPicture(onSuccess,onFail,options);
    }
    var onSuccess = function(imageData) {
        console.log("On Success! ");
        $scope.picData = "data:image/jpeg;base64," +imageData;
        $scope.$apply();
    };
    var onFail = function(e) {
        console.log("On fail " + e);
    };
}]);

myControllers.controller('SendMessageCtrl', ['$scope', function ($scope) {
    devLog('controllers.SendMessageCtrl START');

    $scope.sendMessageText = '';
    $scope.sendMessageMaxLen = 50;
    var WARN_THRESHOLD = 10;

    $scope.remaining = function () {
        return $scope.sendMessageMaxLen - $scope.sendMessageText.length;
    };

    $scope.hasValidLength = function () {
        devLog('controllers.SendMessageCtrl.hasValidLength START');
        return $scope.sendMessageText.length > 0 && $scope.sendMessageText.length <= $scope.sendMessageMaxLen;
    };

    $scope.shouldWarn = function () {
        devLog('controllers.SendMessageCtrl.shouldWarn START');
        return $scope.remaining() < WARN_THRESHOLD;
    };

    $scope.shouldError = function () {
        devLog('controllers.SendMessageCtrl.shouldError START');
        return $scope.sendMessageText.length > $scope.sendMessageMaxLen;
    };

    $scope.clear = function () {
        devLog('controllers.SendMessageCtrl.clear START');
        $scope.sendMessageText = '';
        return;
    };

    $scope.send = function () {
        devLog('controllers.SendMessageCtrl.send START');
        $scope.sendMessageText = '';
        return ;
    };

}]);


myControllers.controller('TemplateCtrl', ['$scope', function ($scope) {
    devLog('controllers.TemplateCtrl START');
}]);


myControllers.controller('EmployeeListCtrl', ['$scope', 'Employee', function ($scope, Employee) {
        devLog('controller.EmployeeListCtrl START');
        // Retrieve all the employees
        $scope.employees = Employee.query();
    }]);

myControllers.controller('EmployeeDetailCtrl', ['$scope', '$routeParams', 'Employee', function ($scope, $routeParams, Employee) {
        devLog('controllers.EmployeeDetailCtrl START $routeParams.employeeId('+$routeParams.employeeId+')');
        // Retrieve the Details for the give employeeID
        $scope.employee = Employee.get({employeeId: $routeParams.employeeId});
    }]);

myControllers.controller('ReportListCtrl', ['$scope', '$routeParams', 'Report', function ($scope, $routeParams, Report) {
        devLog('controllers.ReportListCtrl START $routeParams.employeeId('+$routeParams.employeeId+')');
        // Retrieve all the DirectReports for the given employeeID
        $scope.employees = Report.query({employeeId: $routeParams.employeeId});
    }]);


devLog('controllers LOADING-COMPLETED');