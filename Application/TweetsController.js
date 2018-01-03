"use strict";
PresidentsClubAdmin.controller("TweetsController", ['$rootScope', "$scope", '$parse', '$modal', 'Factory', '$location',
    function ($rootScope, $scope, $parse, $modal, Factory, $location) {
        $scope.tweets = Factory.getTweets();

        $scope.toggleShow = function (key,value) {            
            var show = (value.show == "true") ? "false" : "true";
            var firebase = new Firebase(fbUrl + '/Chat/');
            var chatRef = firebase.child(value.$id);
            chatRef.set({
                fullName: value.fullName,
                DateTime: value.DateTime,
                message: value.message,
                show: show,
                Avatar: value.Avatar,
                Rank: value.Rank
            });
        };
        // <!--//TSF 04/30/15 add filter. adjusted this controller to toggle between show and unshow-->
        $scope.buttonText = function buttonText(obj) {            
            if (obj == "true")
                return "Unshow";
            else
                return "Show";
        };

        $scope.formatShow = function formatShow(obj) {
            if (obj)
                return obj;
            else
                return "false";
        };        

    }]);

