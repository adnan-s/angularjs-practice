(function (){
    const mod = angular.module("SurveyQuestions");
    mod.controller("userLIstController", ['$scope', 'userFactory', userListController ]);

    function userListController($scope, userFactory){
        $scope.title = "Users list";

        userFactory.getAll()
        .then((data) => {
            $scope.users = data;
        })
    }
}());