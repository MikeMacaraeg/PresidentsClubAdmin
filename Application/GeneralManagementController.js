"use strict";
PresidentsClubAdmin.controller("GeneralManagementController", ['$rootScope', '$scope', '$parse', '$modal', 'GeneralManagers', '$location', '$firebaseObject', function ($rootScope, $scope, $parse, $modal, GeneralManagers, $location, $firebaseObject) {
    $scope.csv = {
        content: null,
        header: true,
        separator: ',',
        result: null
    };     

    $scope.showModal = false;    

    $scope.server = $location.protocol() + $location.host() + $location.port();
    $scope.filename = "GeneralManagementSchema.csv";

    $scope.buttonText = "Edit";
    $scope.GeneralManagersDatasets = GeneralManagers.getGeneralManagersDatasets();
    $rootScope.selected = $scope.GeneralManagersDatasets;


    $scope.GeneralManagers = function () {
        $scope.Dataset = GeneralManagers.getGeneralManagersArray($scope.itemSelected);
        console.log("Dataset General Managers");
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
                //var firebase = new Firebase(fbUrl + '/AppConfig/Dataset/GeneralManagers/');
                var firebase = new Firebase(fbUrl + '/Dataset/GeneralManagers/' + now);
                var Rank = parseInt(object[key].Rank);
                var Name = object[key].Name;
                var Email = object[key].Email;
                var EBITDAPerToBudget = object[key].EBITDAPerToBudget;
                var EBITDAMargin = object[key].EBITDAMargin;
                var TotalRevenuePerToBudget = object[key].TotalRevenuePerToBudget;
                var TotalRevenueYOYPerGrowth = object[key].TotalRevenueYOYPerGrowth;
                var CombinedScore = object[key].CombinedScore;
                var MeetsOAA = object[key].MeetsOAA == "P" ? "true" : "false";
                var MeetsCriteria = object[key].MeetsCriteria == "P" ? "true" : "false";
                var emailString = Email.replace(/\./g, "");                
                firebase.child(emailString).set({ Rank: Rank, Name: Name, Email: Email, EBITDAPerToBudget: EBITDAPerToBudget, EBITDAMargin: EBITDAMargin, TotalRevenuePerToBudget: TotalRevenuePerToBudget, TotalRevenueYOYPerGrowth: TotalRevenueYOYPerGrowth, CombinedScore: CombinedScore, MeetsOAA: MeetsOAA, MeetsCriteria: MeetsCriteria });
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
        $scope.rowData = GeneralManagers.getGeneralManager(id, $scope.currentItem);
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