var mod = angular.module('SurveyQuestions');
mod.controller("supportDisplayController", ["$scope", "supportFactory",
    function ($scope, supportFactory) {

        $scope.title = "Support List";

        supportFactory.getAll()
            .then((data) => {
                $scope.supportList = data;
            })
    }
]);
