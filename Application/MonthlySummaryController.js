"use strict";
PresidentsClubAdmin.controller("MonthlySummaryController", ['$rootScope', '$scope', '$parse', '$modal', 'MonthlySummary', '$location', function ($rootScope, $scope, $parse, $modal, MonthlySummary, $location) {
    $scope.csv = {
        content: null,
        header: true,
        separator: ',',
        result: null
    };

    $scope.showModal = false;

    $scope.server = $location.protocol() + $location.host() + $location.port();
    $scope.filename = "Monthlyresult.csv";

    $scope.buttonText = "Edit";
    $scope.MonthlySummaryDatasets = MonthlySummary.getMonthlySummaryDatasets();
    $rootScope.selected = $scope.MonthlySummaryDatasets;

    $scope.MonthlySummary = function () {
        $scope.Dataset = MonthlySummary.getMonthlySummaryArray($scope.itemSelected);
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
        console.log(object);
        var now = moment().format('YYYYMMDDhhmmss');
        Object.keys(object).forEach(
            function (key) {
                var firebase = new Firebase(fbUrl + '/Dataset/MonthlySummary/' + now);
                var Position = object[key].Position.replace(/\./g, '');
                var ProposedEMEA = format(object[key].ProposedEMEA);
                var ProposedNorthAmerica = format(object[key].ProposedNorthAmerica);
                var ProposedTotal = format(object[key].ProposedTotal);
                var ActualEMEA = format(object[key].ActualEMEA);
                var ActualNorthAmerica = format(object[key].ActualNorthAmerica);
                var ActualTotal = format(object[key].ActualTotal);
                var PerQualifiedEMEA = format(object[key].PerQualifiedEMEA.replace("%", ""));
                var PerQualifiedNorthAmerica = format(object[key].PerQualifiedNorthAmerica.replace("%", ""));
                var PerQualifiedTotal = format(object[key].PerQualifiedTotal.replace("%", ""));
                firebase.child(Position).set({ Position: Position, ProposedEMEA: ProposedEMEA, ProposedNorthAmerica: ProposedNorthAmerica, ProposedTotal: ProposedTotal, ActualEMEA: ActualEMEA, ActualNorthAmerica: ActualNorthAmerica, ActualTotal: ActualTotal, PerQualifiedEMEA: PerQualifiedEMEA, PerQualifiedNorthAmerica: PerQualifiedNorthAmerica, PerQualifiedTotal: PerQualifiedTotal });
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
    
    var format = function (value) {
        if (value == "" || value == null || isNaN(value)) 
            return 0;        
        
        return parseInt(value);
    };

    $scope.getRowDataForEdit = function (id) {
        $scope.rowData = MonthlySummary.getMonthlySummary(id, $scope.currentItem);
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