'use strict';
PresidentsClubAdmin.controller('PhotoUploadController', ['$scope', '$filter', 'Upload', function ($scope, $filter, Upload) {
    

    //$scope.setFiles = function (element) {
    //    $scope.$apply(function ($scope) {
    //        console.log('files:', element.files);
    //        // Turn the FileList object into an Array
    //        $scope.files = []
    //        for (var i = 0; i < element.files.length; i++) {
    //            $scope.files.push(element.files[i])
    //        }
    //        $scope.progressVisible = false
    //    });
    //};

    //$scope.uploadFile = function () {
    //    var fd = new FormData()
    //    for (var i in $scope.files) {
    //        fd.append("uploadedFile", $scope.files[i])
    //    }
    //    var xhr = new XMLHttpRequest()
    //    xhr.upload.addEventListener("progress", uploadProgress, false)
    //    xhr.addEventListener("load", uploadComplete, false)
    //    xhr.addEventListener("error", uploadFailed, false)
    //    xhr.addEventListener("abort", uploadCanceled, false)
    //    //xhr.open("POST", "C:\\temp")
    //    xhr.open("POST", "https://routedashboard.firebaseio.com/' + baseUrl + '/Test/Test")
    //    $scope.progressVisible = true
    //    xhr.send(fd)
    //}

    //function uploadProgress(evt) {
    //    $scope.$apply(function () {
    //        if (evt.lengthComputable) {
    //            $scope.progress = Math.round(evt.loaded * 100 / evt.total)
    //        } else {
    //            $scope.progress = 'unable to compute'
    //        }
    //    })
    //}

    //function uploadComplete(evt) {
    //    /* This event is raised when the server send back a response */
    //    alert(evt.target.responseText)
    //}

    //function uploadFailed(evt) {
    //    alert("There was an error attempting to upload the file.")
    //}

    //function uploadCanceled(evt) {
    //    $scope.$apply(function () {
    //        $scope.progressVisible = false
    //    })
    //    alert("The upload has been canceled by the user or the browser dropped the connection.")
    //}

    $scope.onFileSelect = function ($files) {
        console.log("onFileSelect");
        console.log($files);
        $scope.upload = [];
        $scope.uploadResult = [];
        $scope.selectedFiles = $files;

        var file = $files;

        (function (index) {
            console.log("function");
            $scope.upload[index] = Upload.upload({
                url: 'https://imagepresidentsclub.blob.core.windows.net/',
                headers: { 'myHeaderKey': 'myHeaderVal' },
                data: {
                    myModel: $scope.myModel
                },
                file: file,
                fileFormDataName: 'myFile'
            }).then(function (response) {
                var look = response;
                $scope.model.progress = 100;
                $scope.uploadResult.push(response.data);
                refreshServerFileList();
            }, null, function (evt) {
                $scope.model.progress = parseInt(100.0 * evt.loaded / evt.total);
                $scope.model.roundProgressData.label = $scope.model.progress + "%";
                $scope.model.roundProgressData.percentage = ($scope.model.progress / 100);
            });
        })(0);
    };
}]);


