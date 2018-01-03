"use strict";
PresidentsClubAdmin.controller("AppConfigurationController", ['$scope', '$parse', 'AccountManagers','GeneralManagers', 'SalesManagers', 'InsideSalesExecutives', 'SalesExecutives', 'SeniorSalesDirectors', 'RegionalVicePresidents', 'MonthlySummary', function ($scope, $parse, AccountManagers, GeneralManagers, SalesManagers, InsideSalesExecutives, SalesExecutives, SeniorSalesDirectors, RegionalVicePresidents, MonthlySummary) {

    $scope.gmDatasets = GeneralManagers.getGeneralManagersDatasets();
    $scope.smDatasets = SalesManagers.getSalesManagersDatasets();
    $scope.iseDatasets = InsideSalesExecutives.getInsideSalesExecutivesDatasets();
    $scope.seDatasets = SalesExecutives.getSalesExecutivesDatasets();
    $scope.ssdDatasets = SeniorSalesDirectors.getSeniorSalesDirectorsDatasets();
    $scope.rvpDatasets = RegionalVicePresidents.getRegionalVicePresidentsDatasets();
    $scope.amDatasets = AccountManagers.getAccountManagersDatasets();
    $scope.msDatasets = MonthlySummary.getMonthlySummaryDatasets();

    $scope.gmCurrentDataset = GeneralManagers.getCurrentDataset();
    $scope.smCurrentDataset = SalesManagers.getCurrentDataset();
    $scope.iseCurrentDataset = InsideSalesExecutives.getCurrentDataset();
    $scope.seCurrentDataset = SalesExecutives.getCurrentDataset();
    $scope.ssdCurrentDataset = SeniorSalesDirectors.getCurrentDataset();
    $scope.rvpCurrentDataset = RegionalVicePresidents.getCurrentDataset();
    $scope.amCurrentDataset = AccountManagers.getCurrentDataset();
    $scope.msCurrentDataset = MonthlySummary.getCurrentDataset();

    $scope.activateGMDataset = function (obj) {
        var gmFBData = GeneralManagers.getGeneralManagers(obj);
        var object = gmFBData;

        gmFBData.$loaded(function () {
            var ref1 = new Firebase(fbUrl + '/AppConfig/Dataset/GeneralManagers/');
            ref1.remove();

            angular.forEach(gmFBData, function (object) {
                var firebase = new Firebase(fbUrl + '/AppConfig/Dataset/GeneralManagers/');
                var Rank = object.Rank;
                var Name = object.Name;
                var Email = object.Email;
                var EBITDAPerToBudget = object.EBITDAPerToBudget;
                var EBITDAMargin = object.EBITDAMargin;
                var TotalRevenuePerToBudget = object.TotalRevenuePerToBudget;
                var TotalRevenueYOYPerGrowth = object.TotalRevenueYOYPerGrowth;
                var CombinedScore = object.CombinedScore;
                var MeetsOAA = object.MeetsOAA;
                var MeetsCriteria = object.MeetsCriteria;
                var emailString = Email.replace(/\./g, "");
                firebase.child(emailString).set({ Rank: Rank, Name: Name, Email: Email, EBITDAPerToBudget: EBITDAPerToBudget, EBITDAMargin: EBITDAMargin, TotalRevenuePerToBudget: TotalRevenuePerToBudget, TotalRevenueYOYPerGrowth: TotalRevenueYOYPerGrowth, CombinedScore: CombinedScore, MeetsOAA: MeetsOAA, MeetsCriteria: MeetsCriteria });
            });
            var firebase = new Firebase(fbUrl + '/IOS/Announcements');
            var now = new Date().getTime();
            firebase.push({ message: '<span>' + "General Managers Updated" + '</span>', createdBy: "Presidents Club Admin", createdDate: now, show: 'true' });
        });

        var ref2 = new Firebase(fbUrl + '/AppConfig/DatasetID/GeneralManagers/');
        ref2.remove();
        ref2.push(obj);
    };

    $scope.activateAMDataset = function (obj) {
        var amFBData = AccountManagers.getAccountManagers(obj);
        var object = amFBData;

        amFBData.$loaded(function () {
            var ref1 = new Firebase(fbUrl + '/AppConfig/Dataset/AccountManagers/');
            ref1.remove();

            angular.forEach(amFBData, function (object) {
                var firebase = new Firebase(fbUrl + '/AppConfig/Dataset/AccountManagers/');
                var Rank = object.Rank;
                var Name = object.Name;
                var Email = object.Email;
                var BOBGrowth = object.BOBGrowth;                
                var TotalRevenuePerToBudget = object.TotalRevenuePerToBudget;                
                var CombinedScore = object.CombinedScore;
                var OnPace = object.OnPace;
                var MeetsCriteria = object.MeetsCriteria;
                var emailString = Email.replace(/\./g, "");
                firebase.child(emailString).set({ Rank: Rank, Name: Name, Email: Email, BOBGrowth: BOBGrowth, TotalRevenuePerToBudget: TotalRevenuePerToBudget, CombinedScore: CombinedScore, OnPace: OnPace, MeetsCriteria: MeetsCriteria });
            });
            var firebase = new Firebase(fbUrl + '/IOS/Announcements');
            var now = new Date().getTime();
            firebase.push({ message: '<span>' + "Account Managers Updated" + '</span>', createdBy: "Presidents Club Admin", createdDate: now, show: 'true' });
        });

        var ref2 = new Firebase(fbUrl + '/AppConfig/DatasetID/AccountManagers/');
        ref2.remove();
        ref2.push(obj);
    };

    $scope.activateRVPDataset = function (obj) {
        var rvpFBData = RegionalVicePresidents.getRegionalVicePresidents(obj);
        var object = rvpFBData;

        rvpFBData.$loaded(function () {
            var ref1 = new Firebase(fbUrl + '/AppConfig/Dataset/RegionalVicePresidents/');
            ref1.remove();

            angular.forEach(rvpFBData, function (object) {
                var firebase = new Firebase(fbUrl + '/AppConfig/Dataset/RegionalVicePresidents/');
                var Rank = object.Rank;
                var Name = object.Name;
                var Email = object.Email;
                var EBITDAPerToBudget = object.EBITDAPerToBudget;
                var EBITDAMargin = object.EBITDAMargin;
                var TotalRevenuePerToBudget = object.TotalRevenuePerToBudget;
                var TotalRevenueYOYPerGrowth = object.TotalRevenueYOYPerGrowth;
                var CombinedScore = object.CombinedScore;
                var MeetsOAA = object.MeetsOAA;
                var GMOnPace = object.GMOnPace;
                var MeetsCriteria = object.MeetsCriteria;
                var emailString = Email.replace(/\./g, "");
                firebase.child(emailString).set({ Rank: Rank, Name: Name, Email: Email, EBITDAPerToBudget: EBITDAPerToBudget, EBITDAMargin: EBITDAMargin, TotalRevenuePerToBudget: TotalRevenuePerToBudget, TotalRevenueYOYPerGrowth: TotalRevenueYOYPerGrowth, CombinedScore: CombinedScore, MeetsOAA: MeetsOAA, GMOnPace: GMOnPace, MeetsCriteria: MeetsCriteria });
            });
            var firebase = new Firebase(fbUrl + '/IOS/Announcements');
            var now = new Date().getTime();
            firebase.push({ message: '<span>' + "Regional Vice Presidents Updated" + '</span>', createdBy: "Presidents Club Admin", createdDate: now, show: 'true' });
        });

        var ref2 = new Firebase(fbUrl + '/AppConfig/DatasetID/RegionalVicePresidents/');
        ref2.remove();
        ref2.push(obj);
    };

    $scope.activateSMDataset = function (obj) {
        var smFBData = SalesManagers.getSalesManagers(obj);
        var object = smFBData;

        smFBData.$loaded(function () {
            var ref1 = new Firebase(fbUrl + '/AppConfig/Dataset/SalesManagers/');
            ref1.remove();

            angular.forEach(smFBData, function (object) {
                var firebase = new Firebase(fbUrl + '/AppConfig/Dataset/SalesManagers/');
                var Rank = object.Rank;
                var Name = object.Name;
                var Email = object.Email;
                var TotalRevenuePerToBudget = object.TotalRevenuePerToBudget;
                var TotalNewBusinessPerToBudget = object.TotalNewBusinessPerToBudget;
                var MeetsCriteria = object.MeetsCriteria;
                var emailString = Email.replace(/\./g, "");
                firebase.child(emailString).set({ Rank: Rank, Name: Name, Email: Email, TotalRevenuePerToBudget: TotalRevenuePerToBudget, TotalNewBusinessPerToBudget: TotalNewBusinessPerToBudget, MeetsCriteria: MeetsCriteria });
                
            });
            var firebase = new Firebase(fbUrl + '/IOS/Announcements');
            var now = new Date().getTime();
            firebase.push({ message: '<span>' + "Sales Managers Updated" + '</span>', createdBy: "Presidents Club Admin", createdDate: now, show: 'true' });
        });


        var ref2 = new Firebase(fbUrl + '/AppConfig/DatasetID/SalesManagers/');
        ref2.remove();
        ref2.push(obj);
    };

    $scope.activateISEDataset = function (obj) {
        var iseFBData = InsideSalesExecutives.getInsideSalesExecutives(obj);
        var object = iseFBData;

        iseFBData.$loaded(function () {
            var ref1 = new Firebase(fbUrl + '/AppConfig/Dataset/InsideSalesExecutives/');
            ref1.remove();

            angular.forEach(iseFBData, function (object) {
                var firebase = new Firebase(fbUrl + '/AppConfig/Dataset/InsideSalesExecutives/');
                var Rank = object.Rank;
                var Name = object.Name;
                var Email = object.Email;
                var AvgNumClosesPerWeek = object.AvgNumClosesPerWeek;
                var PurgePerToBudget = object.PurgePerToBudget;
                var MeetsCriteria = object.MeetsCriteria;
                var emailString = Email.replace(/\./g, "");
                firebase.child(emailString).set({ Rank: Rank, Name: Name, Email: Email, MeetsCriteria: MeetsCriteria, PurgePerToBudget: PurgePerToBudget, AvgNumClosesPerWeek: AvgNumClosesPerWeek });
            });
            var firebase = new Firebase(fbUrl + '/IOS/Announcements');
            var now = new Date().getTime();
            firebase.push({ message: '<span>' + "Inside Sales Executives Updated" + '</span>', createdBy: "Presidents Club Admin", createdDate: now, show: 'true' });
        });

        var ref2 = new Firebase(fbUrl + '/AppConfig/DatasetID/InsideSalesExecutives/');
        ref2.remove();
        ref2.push(obj);
    };

    $scope.activateSEDataset = function (obj) {
        var seFBData = SalesExecutives.getSalesExecutives(obj);
        var object = seFBData;

        seFBData.$loaded(function () {
            var ref1 = new Firebase(fbUrl + '/AppConfig/Dataset/SalesExecutives/');
            ref1.remove();

            angular.forEach(seFBData, function (object) {
                var firebase = new Firebase(fbUrl + '/AppConfig/Dataset/SalesExecutives/');
                var Rank = object.Rank;
                var Name = object.Name;
                var Email = object.Email;
                var WeeklyTotalNewBusinessTotal = object.WeeklyTotalNewBusinessTotal;
                var WeeklyRegularNewBusinessTotal = object.WeeklyRegularNewBusinessTotal;
                var MeetsCriteria = object.MeetsCriteria;
                var OnPace = object.OnPace;
                var emailString = Email.replace(/\./g, "");
                firebase.child(emailString).set({ WeeklyRegularNewBusinessTotal: WeeklyRegularNewBusinessTotal, WeeklyTotalNewBusinessTotal: WeeklyTotalNewBusinessTotal, Name: Name, Email: Email, Rank: Rank, OnPace: OnPace, MeetsCriteria: MeetsCriteria });
            });
            var firebase = new Firebase(fbUrl + '/IOS/Announcements');
            var now = new Date().getTime();
            firebase.push({ message: '<span>' + "Sales Executives Updated" + '</span>', createdBy: "Presidents Club Admin", createdDate: now, show: 'true' });
        });

        var ref2 = new Firebase(fbUrl + '/AppConfig/DatasetID/SalesExecutives/');
        ref2.remove();
        ref2.push(obj);
    };

    $scope.activateSSDDataset = function (obj) {
        var ssdFBData = SeniorSalesDirectors.getSeniorSalesDirectors(obj);
        var object = ssdFBData;

        ssdFBData.$loaded(function () {
            var ref1 = new Firebase(fbUrl + '/AppConfig/Dataset/SeniorSalesDirectors/');
            ref1.remove();

            angular.forEach(ssdFBData, function (object) {
                var firebase = new Firebase(fbUrl + '/AppConfig/Dataset/SeniorSalesDirectors/');
                var Rank = object.Rank;
                var Name = object.Name;
                var Email = object.Email;
                var TotalRevenuePerToBudget = object.TotalRevenuePerToBudget;
                var RegularNewBusinessPerToBudget = object.RegularNewBusinessPerToBudget;
                var TotalNewBusinessPerToBudget = object.TotalNewBusinessPerToBudget;
                var CombinedScore = object.CombinedScore;
                var MeetsCriteria = object.MeetsCriteria;
                var emailString = Email.replace(/\./g, "");
                firebase.child(emailString).set({ Rank: Rank, Name: Name, Email: Email, MeetsCriteria: MeetsCriteria, CombinedScore: CombinedScore, TotalNewBusinessPerToBudget: TotalNewBusinessPerToBudget, RegularNewBusinessPerToBudget: RegularNewBusinessPerToBudget, TotalRevenuePerToBudget: TotalRevenuePerToBudget });
            });
            var firebase = new Firebase(fbUrl + '/IOS/Announcements');
            var now = new Date().getTime();
            firebase.push({ message: '<span>' + "Senior Sales Director Updated" + '</span>', createdBy: "Presidents Club Admin", createdDate: now, show: 'true' });
        });

        var ref2 = new Firebase(fbUrl + '/AppConfig/DatasetID/SeniorSalesDirectors/');
        ref2.remove();
        ref2.push(obj);
    };

    $scope.activateMSDataset = function (obj) {
        var msFBData = MonthlySummary.getMonthlySummarys(obj);
        var object = msFBData;

        msFBData.$loaded(function () {
            var ref1 = new Firebase(fbUrl + '/AppConfig/Dataset/MonthlySummary/');
            ref1.remove();

            angular.forEach(msFBData, function (object) {
                var firebase = new Firebase(fbUrl + '/AppConfig/Dataset/MonthlySummary/');
                var Position = object.Position;
                var ProposedEMEA = object.ProposedEMEA;
                var ProposedNorthAmerica = object.ProposedNorthAmerica;
                var ProposedTotal = object.ProposedTotal;
                var ActualEMEA = object.ActualEMEA;
                var ActualNorthAmerica = object.ActualNorthAmerica;
                var ActualTotal = object.ActualTotal;
                var PerQualifiedEMEA = object.PerQualifiedEMEA;
                var PerQualifiedNorthAmerica = object.PerQualifiedNorthAmerica;
                var PerQualifiedTotal = object.PerQualifiedTotal;
                firebase.child(Position).set({ Position: Position, ProposedEMEA: ProposedEMEA, ProposedNorthAmerica: ProposedNorthAmerica, ProposedTotal: ProposedTotal, ActualEMEA: ActualEMEA, ActualNorthAmerica: ActualNorthAmerica, ActualTotal: ActualTotal, PerQualifiedEMEA: PerQualifiedEMEA, PerQualifiedNorthAmerica: PerQualifiedNorthAmerica, PerQualifiedTotal: PerQualifiedTotal });
            });
            var firebase = new Firebase(fbUrl + '/IOS/Announcements');
            var now = new Date().getTime();
            firebase.push({ message: '<span>' + "Monthly Summary Updated" + '</span>', createdBy: "Presidents Club Admin", createdDate: now, show: 'true' });
        });

        var ref2 = new Firebase(fbUrl + '/AppConfig/DatasetID/MonthlySummary/');
        ref2.remove();
        ref2.push(obj);
    };


    function format(obj) {
        if (obj == "None Selected")
            return "";
        else
            return obj;
    };

}]);