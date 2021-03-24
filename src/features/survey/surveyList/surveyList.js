(function () {

    var mod = angular.module('SurveyQuestions');
    mod.controller("surveyListController", ["$scope","surveyFactory", "$location", surveyList]);

    function surveyList($scope, surveyFactory, $location) {

        $scope.message = "Survey List";

        surveyFactory.getAll()
        .then((data) => {
            $scope.surveylist = data;
            $scope.userResponse = [];
        })

        $scope.onAddQuestions = (surveyId) => {
            $location.path('/addquestion/' + surveyId);
        }

    }
}());