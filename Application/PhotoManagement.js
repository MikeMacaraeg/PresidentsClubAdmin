"use strict";
PresidentsClubAdmin.controller("PhotoManagementController", ['$rootScope', '$scope', '$parse', '$modal', '$filter', 'PhotoManagement', '$location', '$firebaseObject',
    function ($rootScope, $scope, $parse, $modal, $filter, PhotoManagement, $location, $firebaseObject) {
        $scope.photos = PhotoManagement.getPhotos();

        $scope.toggleShow = function (key, value) {
            console.log(key);
            console.log(value);
            var show = (value.Show == "true") ? "false" : "true";
            var firebase = new Firebase(fbUrl + '/UserPhotos/');
            var chatRef = firebase.child(value.$id);
            chatRef.set({
                Name: value.Name,                
                Caption: value.Caption,
                Show: show
            });
        };

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

        $scope.getPhotoDataForEdit = function (id) {            
            $scope.photoData = PhotoManagement.getPhoto(id);
        };

        $scope.saveChanges = function () {
            $scope.photoData.$save();
            //.then(function () {
            //    alert('Profile saved to Firebase!');
            //}).catch(function (error) {
            //    alert('Error!');
            //});        
        };
    }]);

