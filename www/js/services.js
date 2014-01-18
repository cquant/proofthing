'use strict';

/* Services */

devLog('services LOADING-START');

// service.                , {get:{method:'GET'}}
angular.module('myApp.services', ['ngResource'])
  .factory('HackerNewsSvc', function($resource){
        devLog('services.HackerNewsSvc data request http://api.ihackernews.com/page');
        //return $resource('http://api.ihackernews.com/page', {}, {get:{method:'GET', isArray: false}})
        return $resource('http://api.ihackernews.com/page')
    })
    .factory('HackerDataSvc', function($resource){
        devLog('services.HackerDataSvc data request hackerlocalfile.json');
        return $resource('hackerlocalfile.json')
    })
    .value('version', '0.0.061');

// Define the Injectable Factory object
myApp.factory('navSvc', function($navigate) {
    devLog('services.navSvc INJECTED');
    return {
        slidePage: function (path, type) {
            devLog('services.navSvc.slidePage path('+path+') type('+type+')');
            $navigate.go(path, type);
        },
        back: function () {
            devLog('services.navSvc.back');
            $navigate.back();
        }
    }
});






/*
 CJQ - disabling all this code - I think permanently

 // phonegap ready service - listens to deviceready
 //document.getElementById('messageplaceid3').innerHTML += "Top; "
 myApp.factory('phonegapReady', function() {
 devLog('services.phonegapReady START ****PHONEGAPREADY****');
 alert('CJQ,services.phonegapReady START');
 //document.getElementById('messageplaceid3').innerHTML += "Mid; "
 return function (fn) {
 var queue = [];
 var impl = function () {
 queue.push(Array.prototype.slice.call(arguments));
 devLog('services.phonegapReady Just Queue Pushed.  queue('+queue.length+') ****PHONEGAPREADY****');
 //document.getElementById('messageplaceid3').innerHTML += "Push; "
 };

 document.addEventListener('deviceready', function () {
 //document.getElementById('messageplaceid3').innerHTML += "Event; "
 queue.forEach(function (args) {
 fn.apply(this, args);
 devLog('services.phonegapReady.addEventListener  args('+args+') ****PHONEGAPREADY****');
 });
 impl = fn;
 }, false);

 return function () {
 devLog('services.phonegapReady.impl.apply  arguments('+arguments+') ****PHONEGAPREADY****');
 //document.getElementById('messageplaceid3').innerHTML += "Impl; "
 return impl.apply(this, arguments);
 };
 };
 });


myApp.factory('geolocation', function ($rootScope, phonegapReady) {
  devLog('services.geolocation START $rootScope('+$rootScope+') phonegapReady('+phonegapReady+')');
  alert('CJQ,services.geolocation START');
  return {
    getCurrentPosition: function (onSuccess, onError, options) {
        devLog('services.geolocation.getCurrentPosition START');
        navigator.geolocation.getCurrentPosition(function () {
               var that = this,
               args = arguments;

               if (onSuccess) {
                   $rootScope.$apply(function () {
                        onSuccess.apply(that, args);
                   });
                   }
               }, function () {
                    var that = this,
                    args = arguments;

                   if (onError) {
                        $rootScope.$apply(function () {
                            onError.apply(that, args);
                        });
                   }
               },
            options);
        }
    };
});

myApp.factory('accelerometer', function ($rootScope, phonegapReady) {
    alert('CJQ,services.accelerometer START');
    return {
        getCurrentAcceleration: phonegapReady(function (onSuccess, onError) {
            navigator.accelerometer.getCurrentAcceleration(function () {
                var that = this,
                    args = arguments;

                if (onSuccess) {
                    $rootScope.$apply(function () {
                        onSuccess.apply(that, args);
                    });
                }
            }, function () {
                var that = this,
                args = arguments;

                if (onError) {
                    $rootScope.$apply(function () {
                        onError.apply(that, args);
                    });
                }
            });
        })
    };
});

myApp.factory('notification', function ($rootScope, phonegapReady) {
    devLog('services.notification START *************');
    alert('CJQ,services.notification START');
    return {
        alert: phonegapReady(function (message, alertCallback, title, buttonName) {
            navigator.notification.alert(message, function () {
                var that = this,
                    args = arguments;

                $rootScope.$apply(function () {
                    alertCallback.apply(that, args);
                });
            }, title, buttonName);
        }),
        confirm: phonegapReady(function (message, confirmCallback, title, buttonLabels) {
            navigator.notification.confirm(message, function () {
                var that = this,
                    args = arguments;

                $rootScope.$apply(function () {
                    confirmCallback.apply(that, args);
                });
            }, title, buttonLabels);
        }),
        beep: function (times) {
            navigator.notification.beep(times);
        },
        vibrate: function (milliseconds) {
            navigator.notification.vibrate(milliseconds);
        }
    };
});





myApp.factory('compass', function ($rootScope, phonegapReady) {
    alert('CJQ,services.compass START');
    return {
        getCurrentHeading: phonegapReady(function (onSuccess, onError) {
            navigator.compass.getCurrentHeading(function () {
                var that = this,
                    args = arguments;

                if (onSuccess) {
                    $rootScope.$apply(function () {
                        onSuccess.apply(that, args);
                    });
                }
            }, function () {
                var that = this,
                    args = arguments;

                if (onError) {
                    $rootScope.$apply(function () {
                        onError.apply(that, args);
                    });
                }
            });
        })
    };
});

myApp.factory('contacts', function ($rootScope, phonegapReady) {
    alert('CJQ,services.contacts START');
    return {
        findContacts: phonegapReady(function (onSuccess, onError) {
            var options = new ContactFindOptions();
            options.filter="";
            options.multiple=true;
            var fields = ["displayName", "name"];
            navigator.contacts.find(fields, function(r){console.log("Success" +r.length);var that = this,
                args = arguments;
                if (onSuccess) {
                    $rootScope.$apply(function () {
                        onSuccess.apply(that, args);
                    });
                }
            }, function () {
                var that = this,
                    args = arguments;

                if (onError) {
                    $rootScope.$apply(function () {
                        onError.apply(that, args);
                    });
                }
            }, options)
        })
    }
});

*/


devLog('services LOADING-COMPLETED');



