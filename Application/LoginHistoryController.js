"use strict";
PresidentsClubAdmin.controller("LoginHistoryController", ["$scope", "$filter", "LoginHistory",
    function ($scope, $parse, LoginHistory) {
        //Announcement Modal FullName Message Date Show=True
        
        $scope.LoginHistory = LoginHistory.getLoginHistory();

        $scope.formatID = function (key) {            
            var newID = "collapse" + key.replace("@", "");            
            return newID;
        };

    }]);

var uniqueItems = function (data, key) {
    var result = [];
    for (var i = 0; i < data.length; i++) {
        var value = data[i][key];
        if (result.indexOf(value) == -1) {
            result.push(value);
        }
    }
    return result;
};


PresidentsClubAdmin.filter('groupBy',
            function () {
                return function (collection, key) {
                    if (collection === null) return;
                    return uniqueItems(collection, key);
                };
            });