'use strict';

devLog('rest-services LOADING-START');

/*
     $resource

     A factory which creates a resource object that lets you interact with RESTful server-side data sources.
     The returned resource object has action methods which provide high-level behaviors without the need to interact with the low level $http service.
     Requires the ngResource module to be installed.
 */

angular.module('myApp.restServices', ['ngResource'])
    .factory('Employee', ['$resource',
        function ($resource) {
            devLog('rest-services Employee resource(http://localhost:3000/employees/:employeeId)');
            return $resource('http://localhost:3000/employees/:employeeId', {});
        }])

    .factory('Report', ['$resource',
        function ($resource) {
            devLog('rest-services Report resource(http://localhost:3000/employees/:employeeId/reports)');
            return $resource('http://localhost:3000/employees/:employeeId/reports', {});
        }]);

devLog('rest-services LOADING-COMPLETED');