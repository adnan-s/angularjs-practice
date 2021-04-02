(function () {

    var mod = angular.module('SurveyQuestions');
    mod.controller("supportDisplayController", ["$scope", "supportFactory", supportDisplay]);

    function supportDisplay($scope, supportFactory) {

        $scope.title = "Support List";

        supportFactory.getAll()
        .then((data) => {
            console.log('here');
            $scope.supportList = data;
        })
    }

}());