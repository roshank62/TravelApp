function departArriveController($scope, $rootScope, infoServiceDate, $state) {

    $scope.country = ["Boston", "New York", "Chicago", " SanFrancisco"];
    $scope.country.selected= $scope.country[3];
    /*datePicker depart date*/
    $scope.today = function () {
        $scope.dt = new Date();
    };
    var j = new Date();
    console.log(j);
    $scope.minDate = new Date();

    $scope.dateformat = "MM/dd/yyyy";
    $scope.today();
    $scope.showcalendar = function ($event) {

        $scope.showdp = true;
    };
    $scope.showdp = false;

    /*datePicker return date*/
    $scope.todays = function () {
        $scope.ds = new Date();
    };
    var j = new Date();
    console.log(j);
    $scope.minDate = new Date();

    $scope.dateformats = "MM/dd/yyyy";
    $scope.todays();
    $scope.showcalendars = function ($event) {
        $scope.showd = true;

    };
    $scope.showd = false;
    $scope.dateOptions = {
        formatYear: 'yy',
        maxDate: new Date(2020, 5, 22),
        minDate: new Date(),
        startingDay: 1
    };

    /*handle*/
    $scope.handleClicks = function () {

        var departTime=  $scope.dt.toString().slice(0,15);
        var returnTime=  $scope.ds.toString().slice(0,11);
        $scope.datePage = {
            country: $scope.country.selected,
            departDate: departTime,
            returnDate: returnTime
        };
        infoServiceDate.prepForBroadcastDate($scope.datePage);
        $state.go('home.confirm');

    }
    $rootScope.$on('handleBroadcast', function () {
        $rootScope.classChange = 2;   
    });
}
module.exports = /*@ngInject*/ departArriveController;