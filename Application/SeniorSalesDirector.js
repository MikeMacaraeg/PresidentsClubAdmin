"use strict";
PresidentsClubAdmin.controller("SeniorSalesDirectorController", ['$rootScope', '$scope', '$parse', '$modal', 'SeniorSalesDirectors', '$location', function ($rootScope, $scope, $parse, $modal, SeniorSalesDirectors, $location) {
    $scope.csv = {
        content: null,
        header: true,
        separator: ',',
        result: null
    };

    $scope.showModal = false;

    $scope.server = $location.protocol() + $location.host() + $location.port();
    $scope.filename = "SeniorSalesDirectorSchema.csv";

    $scope.buttonText = "Edit";
    $scope.SeniorSalesDirectorsDatasets = SeniorSalesDirectors.getSeniorSalesDirectorsDatasets();
    $rootScope.selected = $scope.SeniorSalesDirectorsDatasets;

    $scope.SeniorSalesDirectors = function () {
        $scope.Dataset = SeniorSalesDirectors.getSeniorSalesDirectorsArray($scope.itemSelected);
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
                var firebase = new Firebase(fbUrl + '/Dataset/SeniorSalesDirectors/' + now);
                var Rank = parseInt(object[key].Rank);
                var Name = object[key].Name;
                var Email = object[key].Email;
                var TotalRevenuePerToBudget = object[key].TotalRevenuePerToBudget;
                var RegularNewBusinessPerToBudget = object[key].RegularNewBusinessPerToBudget;
                var TotalNewBusinessPerToBudget = object[key].TotalNewBusinessPerToBudget;
                var CombinedScore = object[key].CombinedScore;
                var MeetsCriteria = object[key].MeetsCriteria == "P" ? "true" : "false";
                var emailString = Email.replace(/\./g, "");
                firebase.child(emailString).set({ Rank: Rank, Name: Name, Email: Email, MeetsCriteria: MeetsCriteria, CombinedScore: CombinedScore, TotalNewBusinessPerToBudget: TotalNewBusinessPerToBudget, RegularNewBusinessPerToBudget: RegularNewBusinessPerToBudget, TotalRevenuePerToBudget: TotalRevenuePerToBudget });
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

    $scope.formatMC = function (object) {
        return (object == "O" || object == "false" || object == false) ? 'fa-times x' : 'fa-check check';
    };

    $scope.getRowDataForEdit = function (id) {
        $scope.rowData = SeniorSalesDirectors.getSeniorSalesDirector(id, $scope.currentItem);
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