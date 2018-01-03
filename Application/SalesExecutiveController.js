"use strict";
PresidentsClubAdmin.controller("SalesExecutiveController", ['$rootScope', '$scope', '$parse', '$modal', 'SalesExecutives', '$location', function ($rootScope, $scope, $parse, $modal, SalesExecutives, $location ) {
    $scope.csv = {
        content: null,
        header: true,
        separator: ',',
        result: null
    };

    $scope.showModal = false;

    $scope.server = $location.protocol() + $location.host() + $location.port();
    $scope.filename = "SalesExecutiveSchema.csv";

    $scope.buttonText = "Edit";
    $scope.SalesExecutivesDatasets = SalesExecutives.getSalesExecutivesDatasets();
    $rootScope.selected = $scope.SalesExecutivesDatasets;

    $scope.SalesExecutives = function () {
        $scope.Dataset = SalesExecutives.getSalesExecutivesArray($scope.itemSelected);
        $scope.currentItem = $scope.itemSelected;
        $scope.tab2Result = true;
    };

    var _lastGoodResult = '';
    $scope.toPrettyJSON = function (objStr, tabWidth) {

        var obj = null;
        try {
            obj = $parse(objStr)({});
        } catch (e) {
            // eat $parse error
            return _lastGoodResult;
        }

        var result = JSON.stringify(obj, null, Number(tabWidth));
        _lastGoodResult = result;

        return result;
    };

    $scope.sendMessage =
    function (object) {
        var now = moment().format('YYYYMMDDhhmmss');
        Object.keys(object).forEach(
            function (key) {
                var firebase = new Firebase(fbUrl + '/Dataset/SalesExecutives/' + now);
                var Rank = parseInt(object[key].Rank);
                var Name = object[key].Name;
                var Email = object[key].Email;
                var WeeklyTotalNewBusinessTotal = object[key].WeeklyTotalNewBusinessTotal;
                var WeeklyRegularNewBusinessTotal = object[key].WeeklyRegularNewBusinessTotal;
                var MeetsCriteria = (object[key].MeetsCriteria == "P" || object[key].MeetsCriteria == "PPP") ? "true" : "false";
                var OnPace = object[key].OnPace == "P" ? "true" : "false";
                var emailString = Email.replace(/\./g, "");
                firebase.child(emailString).set({ WeeklyRegularNewBusinessTotal: WeeklyRegularNewBusinessTotal, WeeklyTotalNewBusinessTotal: WeeklyTotalNewBusinessTotal, Name: Name, Email: Email, Rank: Rank, OnPace: OnPace, MeetsCriteria: MeetsCriteria });
            });
    };   

    $scope.parseJson =
        function (objStr) {
            var obj = null;
            try {
                obj = $parse(objStr)({});
                return obj;
            } catch (e) {
                // eat $parse error
                return null;
            }
        };

    $scope.formatOP = function (object) {
        return (object == "O" || object == "false" || object == false) ? 'fa-times x' : 'fa-check check';
    };

    $scope.formatMC = function (object) {
        return (object == "O" || object == "false" || object == false) ? 'fa-times x' : 'fa-check check';
    };

    $scope.getRowDataForEdit = function (id) {
        $scope.rowData = SalesExecutives.getSalesExecutive(id, $scope.currentItem);
        $scope.rowDataBackup = $scope.rowData;
    };

    $scope.saveChanges = function () {
        $scope.rowData.$save();
        //.then(function () {
        //    alert('Profile saved to Firebase!');
        //}).catch(function (error) {
        //    alert('Error!');
        //});        
    };

}]);