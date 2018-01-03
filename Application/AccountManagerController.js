"use strict";
PresidentsClubAdmin.controller("AccountManagerController", ['$rootScope', '$scope', '$parse', '$modal', 'AccountManagers', '$location', '$firebaseObject', function ($rootScope, $scope, $parse, $modal, AccountManagers, $location, $firebaseObject) {
    $scope.csv = {
        content: null,
        header: true,
        separator: ',',
        result: null
    };

    $scope.showModal = false;

    $scope.server = $location.protocol() + $location.host() + $location.port();
    $scope.filename = "AccountManagerSchema.csv";

    $scope.buttonText = "Edit";
    $scope.AccountManagersDatasets = AccountManagers.getAccountManagersDatasets();
    $rootScope.selected = $scope.AccountManagersDatasets;

    $scope.AccountManagers = function () {
        $scope.Dataset = AccountManagers.getAccountManagersArray($scope.itemSelected);
        console.log("Dataset Account Managers");
        console.log($scope.Dataset);
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
                //var firebase = new Firebase(fbUrl + '/AppConfig/Dataset/AccountManagers/');
                var firebase = new Firebase(fbUrl + '/Dataset/AccountManagers/' + now);
                var Rank = parseInt(object[key].Rank);
                var Name = object[key].Name;
                var Email = object[key].Email;
                var BOBGrowth = object[key].BOBGrowth;
                var TotalRevenuePerToBudget = object[key].TotalRevenuePerToBudget;                
                var CombinedScore = object[key].CombinedScore;
                var OnPace = object[key].OnPace == "P" ? "true" : "false";
                var MeetsCriteria = object[key].MeetsCriteria == "P" ? "true" : "false";
                var EmailString = Email.replace(/\./g, "");
                firebase.child(EmailString).set({ Rank: Rank, Name: Name, Email: Email, BOBGrowth: BOBGrowth, TotalRevenuePerToBudget: TotalRevenuePerToBudget, CombinedScore: CombinedScore, OnPace: OnPace, MeetsCriteria: MeetsCriteria });
            });
    };

    //var usersRef = new Firebase('https://myapp.firebaseio.com/users');
    //$scope.users = $firebase(usersRef);
    //$scope.users.$child(*Email*).set({
    //    first: 'Vincent',
    //    last: 'Van Gough',
    //    ears: 1
    //});

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

    $scope.formatMOAA = function (object) {
        return (object == "O" || object == "false" || object == false) ? 'fa-times x' : 'fa-check check';
    };

    $scope.getRowDataForEdit = function (id) {
        console.log("ID");
        console.log(id);
        $scope.rowData = AccountManagers.getAccountManager(id, $scope.currentItem);
        Object.keys($scope.rowData).forEach(
            function (key) {
                console.log(object[key]);
            });
        console.log($scope.rowData);
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