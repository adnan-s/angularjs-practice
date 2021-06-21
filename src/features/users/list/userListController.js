var mod = angular.module("SurveyQuestions");
mod.controller("userListController", ['$scope', 'userFactory',
    function ($scope, userFactory) {

        $scope.title = "Manage Users";

        userFactory.getAll()
            .then((data) => {
                $scope.users = data;
            }, (err) => {
                console.log(err);
            })

    }
]);

