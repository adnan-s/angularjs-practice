(function () {
    const mod = angular.module("SurveyQuestions");
    mod.controller("userListController", ['$scope', 'userFactory', userListController]);

    function userListController($scope, userFactory) {

        $scope.title = "Manage Users";

        userFactory.getAll()
            .then((data) => {
                $scope.users = data;
            }, (err) => {
                console.log(err);
            })

    }
}());