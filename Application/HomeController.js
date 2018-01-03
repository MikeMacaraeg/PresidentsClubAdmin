"use strict";
PresidentsClubAdmin.controller("HomeController", ["$rootScope", "$scope", "$filter",
    function ($rootScope, $scope, $filter) {
        $rootScope.baseUrl = "' + baseUrl + '";
        //$rootScope.baseUrl = "DEV/PCAPP";
        //$rootScope.baseUrl = "PROD/PCAPP";
    }]);

