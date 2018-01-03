
PresidentsClubAdmin.factory("Factory", ["$firebaseObject", "$firebaseArray", '$http',
    function ( $firebaseObject, $firebaseArray, $http) {
        var ref = new Firebase(fbUrl + '/Chat/');
        return {
            getTweets: function () {
                return $firebaseArray(ref);
            },
        }
    }
]);

PresidentsClubAdmin.factory("PhotoManagement", ["$firebaseObject", "$firebaseArray", '$http',
    function ($firebaseObject, $firebaseArray, $http) {
        var ref = new Firebase(fbUrl + '/UserPhotos/');
        return {
            getPhotos: function () {
                return $firebaseArray(ref);
            },
            getPhoto: function (id, item) {
                var ref3 = new Firebase(fbUrl + '/UserPhotos/' + id);
                return $firebaseObject(ref3);
            },
        }
    }
]);

PresidentsClubAdmin.factory("Announcements", ["$firebaseObject", "$firebaseArray", '$http',
    function ( $firebaseObject, $firebaseArray, $http) {
        var ref = new Firebase(fbUrl + '/IOS/Announcements');
        return {
            getAnnouncements: function () {
                return $firebaseArray(ref);
            },
        }
    }
]);

PresidentsClubAdmin.factory("LoginHistory", ["$firebaseObject", "$firebaseArray", '$http',
    function ($firebase, $firebaseObject, $firebaseArray, $http) {
        var ref = new Firebase(fbUrl + '/Login');
        return {
            getLoginHistory: function () {                
                return $firebaseObject(ref);
            },
        }
    }
]);

PresidentsClubAdmin.factory("GeneralManagers", ["$rootScope", "$firebaseObject", "$firebaseArray", '$http',
    function ($rootScope, $firebaseObject, $firebaseArray, $http) {
        var ref = new Firebase(fbUrl + '/Dataset/GeneralManagers/');
        var ref2 = new Firebase(fbUrl + '/AppConfig/DatasetID/GeneralManagers');
        return {
            getGeneralManagersDatasets: function () {
                return $firebaseObject(ref);
            },
            getGeneralManagers: function (id) {
                var ref1 = new Firebase(fbUrl + '/Dataset/GeneralManagers/' + id);                
                return $firebaseObject(ref1);
            },
            getGeneralManagersArray: function (id) {
                var ref1 = new Firebase(fbUrl + '/Dataset/GeneralManagers/' + id);
                return $firebaseArray(ref1);
            },
            getCurrentDataset: function () {
                return $firebaseObject(ref2);
            },
            getGeneralManager: function (id, dataset) {
                var ref3 = new Firebase(fbUrl + '/Dataset/GeneralManagers/' + dataset + '/' + id);
                return $firebaseObject(ref3);
            },
        }
    }
]);

PresidentsClubAdmin.factory("AccountManagers", ["$rootScope", "$firebaseObject", "$firebaseArray", '$http',
    function ($rootScope, $firebaseObject, $firebaseArray, $http) {
        var ref = new Firebase(fbUrl + '/Dataset/AccountManagers/');
        var ref2 = new Firebase(fbUrl + '/AppConfig/DatasetID/AccountManagers');
        return {
            getAccountManagersDatasets: function () {
                return $firebaseObject(ref);
            },
            getAccountManagers: function (id) {
                var ref1 = new Firebase(fbUrl + '/Dataset/AccountManagers/' + id);
                return $firebaseObject(ref1);
            },
            getAccountManagersArray: function (id) {
                var ref1 = new Firebase(fbUrl + '/Dataset/AccountManagers/' + id);
                return $firebaseArray(ref1);
            },
            getCurrentDataset: function () {
                return $firebaseObject(ref2);
            },
            getAccountManager: function (id, dataset) {
                var ref3 = new Firebase(fbUrl + '/Dataset/AccountManagers/' + dataset + '/' + id);
                return $firebaseObject(ref3);
            },
        }
    }
]);

PresidentsClubAdmin.factory("RegionalVicePresidents", ["$rootScope", "$firebaseObject", "$firebaseArray", '$http',
    function ($rootScope, $firebaseObject, $firebaseArray, $http) {
        var ref = new Firebase(fbUrl + '/Dataset/RegionalVicePresidents/');
        var ref2 = new Firebase(fbUrl + '/AppConfig/DatasetID/RegionalVicePresidents');
        return {
            getRegionalVicePresidentsDatasets: function () {
                return $firebaseObject(ref);
            },
            getRegionalVicePresidents: function (id) {
                var ref1 = new Firebase(fbUrl + '/Dataset/RegionalVicePresidents/' + id);
                return $firebaseObject(ref1);
            },
            getRegionalVicePresidentsArray: function (id) {
                var ref1 = new Firebase(fbUrl + '/Dataset/RegionalVicePresidents/' + id);
                return $firebaseArray(ref1);
            },
            getCurrentDataset: function () {
                return $firebaseObject(ref2);
            },
            getRegionalVicePresident: function (id, dataset) {
                var ref3 = new Firebase(fbUrl + '/Dataset/RegionalVicePresidents/' + dataset + '/' + id);
                return $firebaseObject(ref3);
            },
        }
    }
]);

PresidentsClubAdmin.factory("SalesManagers", ["$rootScope", "$firebaseObject", "$firebaseArray", '$http',
    function ($rootScope, $firebaseObject, $firebaseArray, $http) {
        var ref = new Firebase(fbUrl + '/Dataset/SalesManagers/');
        var ref2 = new Firebase(fbUrl + '/AppConfig/DatasetID/SalesManagers');
        return {
            getSalesManagersDatasets: function () {
                return $firebaseObject(ref);
            },
            getSalesManagers: function (id) {
                var ref1 = new Firebase(fbUrl + '/Dataset/SalesManagers/' + id);
                return $firebaseObject(ref1);

            },
            getSalesManagersArray: function (id) {
                var ref1 = new Firebase(fbUrl + '/Dataset/SalesManagers/' + id);
                return $firebaseArray(ref1);

            },
            getCurrentDataset: function () {
                return $firebaseObject(ref2);
            },
            getSalesManager: function (id, dataset) {
                var ref3 = new Firebase(fbUrl + '/Dataset/SalesManagers/' + dataset + '/' + id);
                return $firebaseObject(ref3);
            },
        }
    }
]);

PresidentsClubAdmin.factory("InsideSalesExecutives", ["$rootScope", "$firebaseObject", "$firebaseArray", '$http',
    function ($rootScope, $firebaseObject, $firebaseArray, $http) {
        var ref = new Firebase(fbUrl + '/Dataset/InsideSalesExecutives/');
        var ref2 = new Firebase(fbUrl + '/AppConfig/DatasetID/InsideSalesExecutives');
        return {
            getInsideSalesExecutivesDatasets: function () {
                return $firebaseObject(ref);
            },
            getInsideSalesExecutives: function (id) {
                var ref1 = new Firebase(fbUrl + '/Dataset/InsideSalesExecutives/' + id);
                return $firebaseObject(ref1);
            },
            getInsideSalesExecutivesArray: function (id) {
                var ref1 = new Firebase(fbUrl + '/Dataset/InsideSalesExecutives/' + id);
                return $firebaseArray(ref1);
            },
            getCurrentDataset: function () {
                return $firebaseObject(ref2);
            },
            getInsideSalesExecutive: function (id, dataset) {
                var ref3 = new Firebase(fbUrl + '/Dataset/InsideSalesExecutives/' + dataset + '/' + id);
                return $firebaseObject(ref3);
            },
        }
    }
]);

PresidentsClubAdmin.factory("SalesExecutives", ["$rootScope", "$firebaseObject", "$firebaseArray", '$http',
    function ($rootScope, $firebaseObject, $firebaseArray, $http) {
        var ref = new Firebase(fbUrl + '/Dataset/SalesExecutives/');
        var ref2 = new Firebase(fbUrl + '/AppConfig/DatasetID/SalesExecutives');
        return {
            getSalesExecutivesDatasets: function () {
                return $firebaseObject(ref);
            },
            getSalesExecutives: function (id) {
                var ref1 = new Firebase(fbUrl + '/Dataset/SalesExecutives/' + id);
                return $firebaseObject(ref1);
            },
            getSalesExecutivesArray: function (id) {
                var ref1 = new Firebase(fbUrl + '/Dataset/SalesExecutives/' + id);
                return $firebaseArray(ref1);
            },
            getCurrentDataset: function () {
                return $firebaseObject(ref2);
            },
            getSalesExecutive: function (id, dataset) {
                var ref3 = new Firebase(fbUrl + '/Dataset/SalesExecutives/' + dataset + '/' + id);
                return $firebaseObject(ref3);
            },
        }
    }
]);

PresidentsClubAdmin.factory("SeniorSalesDirectors", ["$rootScope", "$firebaseObject", "$firebaseArray", '$http',
    function ($rootScope, $firebaseObject, $firebaseArray, $http) {
        var ref = new Firebase(fbUrl + '/Dataset/SeniorSalesDirectors/');
        var ref2 = new Firebase(fbUrl + '/AppConfig/DatasetID/SeniorSalesDirectors');
        return {
            getSeniorSalesDirectorsDatasets: function () {
                return $firebaseObject(ref);
            },
            getSeniorSalesDirectors: function (id) {
                var ref1 = new Firebase(fbUrl + '/Dataset/SeniorSalesDirectors/' + id);
                return $firebaseObject(ref1);
            },
            getSeniorSalesDirectorsArray: function (id) {
                var ref1 = new Firebase(fbUrl + '/Dataset/SeniorSalesDirectors/' + id);
                return $firebaseArray(ref1);
            },
            getCurrentDataset: function () {
                return $firebaseObject(ref2);
            },
            getSeniorSalesDirector: function (id, dataset) {
                var ref3 = new Firebase(fbUrl + '/Dataset/SeniorSalesDirectors/' + dataset + '/' + id);
                return $firebaseObject(ref3);
            },
        }
    }
]);

PresidentsClubAdmin.factory("MonthlySummary", ["$rootScope", "$firebaseObject", "$firebaseArray", '$http',
    function ($rootScope, $firebaseObject, $firebaseArray, $http) {
        var ref = new Firebase(fbUrl + '/Dataset/MonthlySummary/');
        var ref2 = new Firebase(fbUrl + '/AppConfig/DatasetID/MonthlySummary');
        return {
            getMonthlySummaryDatasets: function () {
                return $firebaseObject(ref);
            },
            getMonthlySummarys: function (id) {
                var ref1 = new Firebase(fbUrl + '/Dataset/MonthlySummary/' + id);
                return $firebaseObject(ref1);
            },
            getMonthlySummaryArray: function (id) {
                var ref1 = new Firebase(fbUrl + '/Dataset/MonthlySummary/' + id);
                return $firebaseArray(ref1);
            },
            getCurrentDataset: function () {
                return $firebaseObject(ref2);
            },
            getMonthlySummary: function (id, dataset) {
                var ref3 = new Firebase(fbUrl + '/Dataset/MonthlySummary/' + dataset + '/' + id);
                return $firebaseObject(ref3);
            },
        }
    }
]);