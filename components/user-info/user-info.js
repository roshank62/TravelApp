function userInfoController($scope, $rootScope, infoService, $state) {

    $scope.title = "sss";
    console.log(infoService);


    $scope.handleClick = function () {
        $scope.m = {
            name: $scope.name,
            lastName: $scope.LastName,
            email: $scope.email,
            phone: $scope.phone
        };
        infoService.prepForBroadcast($scope.m);
        $state.go('home.datePick')
    };
    $rootScope.$on('handleBroadcast', function () {
        $scope.message = infoService.message;
        console.log('jss', $scope.message);
        $rootScope.classChange = 1;

    });
}
module.exports = /*@ngInject*/ userInfoController;