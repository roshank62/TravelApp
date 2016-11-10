function confirmController($scope, infoService, infoServiceDate,$rootScope,$http,$state) {
    $scope.$on('handleBroadcast', function () {
        $scope.message = infoService.message;
    });
    $scope.$on('handleBroadcastDate', function () {
        $scope.messages = infoServiceDate.message;
    });

    infoService.broadcastItem();
    infoServiceDate.broadcastItemDate();
console.log($scope.message.email);     
    $scope.submit=function(){
        var to,subject,text;
            to=$scope.message.email;
            subject="Travel booking confirm!!!!";
            html='<pre>'+$scope.message.name+'  '+ $scope.message.lastName+' ('+ $scope.message.phone+') will' +' '+
                'depart from'+' ' +$scope.messages.country+' on'+' '+ $scope.messages.departDate +' '+'and  return on '+
                $scope.messages.returnDate+' </pre>';
            console.log("Sending E-mail...Please wait");
        $.get("http://localhost:3000/send",{to:to,subject:subject,html:html},function(data){
            if(data=="sent")
            {
                console.log("Email is been sent at "+to+" . Please check inbox !");
            }
        });
        $state.go('home.userInfo');
    }

}
module.exports = /*@ngInject*/ confirmController;