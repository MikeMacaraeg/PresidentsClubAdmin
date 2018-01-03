var PresidentsClubAdmin = angular.module("PresidentsClubAdmin", ['ngRoute', 'ngCsvImport', 'firebase', 'ui.bootstrap', 'textAngular', 'ngFileUpload'])
.config(function ($routeProvider, $locationProvider) {

    $routeProvider.when('', {
        templateUrl: '',
        controller: ''
    });

    $routeProvider.when('/salesmanager', {
        templateUrl: '/templates/SalesManagers.html',
        controller: 'SalesManagersController'
    });

    $routeProvider.when('/insidesalesexecutive', {
        templateUrl: '/templates/InsideSalesExecutive.html',
        controller: 'InsideSalesExecutiveController'
    });

    $routeProvider.when('/salesexecutive', {
        templateUrl: '/templates/SalesExecutive.html',
        controller: 'SalesExecutiveController'
    });

    $routeProvider.when('/seniorsalesdirector', {
        templateUrl: '/templates/SeniorSalesDirector.html',
        controller: 'SeniorSalesDirectorController'
    });

    $routeProvider.when('/generalmanagement', {
        templateUrl: '/templates/GeneralManagement.html',
        controller: 'GeneralManagementController'
    });

    $routeProvider.when('/announcement', {
        templateUrl: '/templates/Announcement.html',
        controller: 'AnnouncementController'
    });

    $routeProvider.when('/tweets', {
        templateUrl: '/templates/Tweets.html',
        controller: 'TweetsController'
    });

    $routeProvider.when('/', {
        templateUrl: '/templates/HomePage.html',
        controller: 'HomeController'
    });

    $routeProvider.when('/appconfig', {
        templateUrl: '/templates/AppConfiguration.html',
        controller: 'AppConfigurationController'
    });

    $routeProvider.when('/loginhistory', {
        templateUrl: '/templates/LoginHistory.html',
        controller: 'LoginHistoryController'
    });

    $routeProvider.when('/monthlysummary', {
        templateUrl: '/templates/MonthlySummary.html',
        controller: 'MonthlySummaryController'
    });

    $routeProvider.when('/photoupload', {
        templateUrl: '/templates/PhotoUpload.html',
        controller: 'PhotoUploadController'
    });

    $routeProvider.when('/photomanagement', {
        templateUrl: '/templates/PhotoManagement.html',
        controller: 'PhotoManagementController'
    });

    $routeProvider.when('/regionalvicepresident', {
        templateUrl: '/templates/RegionalVicePresident.html',
        controller: 'RegionalVicePresidentController'
    });

    $routeProvider.when('/accountmanager', {
        templateUrl: '/templates/AccountManager.html',
        controller: 'AccountManagerController'
    });

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
});