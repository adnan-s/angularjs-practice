(function () {

    var mod = angular.module('SurveyQuestions');
    mod.controller("surveyListController", ["$scope","surveyFactory", "$location", surveyList]);

    function surveyList($scope, surveyFactory, $location) {

        console.log(surveyFactory);

        $scope.message = "Survey List";

        surveyFactory.getAllSurvey.then((data) => {
            $scope.surveylist = data;
            $scope.userResponse = [];
        })

        $scope.onAddQuestions = (surveyId) => {
            $location.path('/addquestion/:' + surveyId);
        }

    }
}());