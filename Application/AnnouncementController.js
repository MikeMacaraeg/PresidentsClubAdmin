"use strict";
PresidentsClubAdmin.controller("AnnouncementController", ['$rootScope', "$scope", '$parse', '$modal', "Announcements", '$location',
function ($rootScope, $scope, $parse, $modal, Announcements, $location) {
        //Announcement Modal FullName Message Date Show=True
    $scope.Announcements = Announcements.getAnnouncements();
   
        $scope.announcement = "";
        $scope.createdBy = "";        

        $scope.sendMessage =
        function (message, createdBy) {            
            var now = moment().format('MMMM Do YYYY, h:mm a');   
            var firebase = new Firebase(fbUrl + '/IOS/Announcements');
            firebase.push({ message: '<span>' + message + '</span>', createdBy: createdBy, createdDate: now, show: 'true' });
            $scope.announcement = "";
            $scope.createdBy = "";
            $scope.tab = 2;
            $('.tab1').removeClass('active');
            $('.tab2').addClass('active');
        };

        

    // <!--//TSF 04/30/15 add show and hide toggle. added the key parameter to the below function-->
        $scope.toggleShow = function (key,value) {           
            var show = (value.show == "true") ? "false" : "true";
            var firebase = new Firebase(fbUrl + '/IOS/Announcements');
            console.log(key);
            console.log(value);
            var chatRef = firebase.child(value.$id);
            chatRef.set({
                createdBy: value.createdBy ? value.createdBy : "",
                createdDate: value.createdDate,
                message: value.message,
                show: show
            });
        };
    // <!--//TSF 04/30/15 add filter. adjusted this controller to toggle between show and unshow-->
        $scope.buttonText = function buttonText(obj) {
            //console.log("buttonText");
            //console.log(obj);
            if (obj == "true")
                return "UnShow";
            else
                return "Show";
        };

        $scope.formatShow = function formatShow(obj) {
            //console.log("formatShow");
            //console.log(obj);
            if (obj)
                return obj;
            else
                return "false";
        };

               

    }]);

