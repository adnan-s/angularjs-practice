(function () {

    var mod = angular.module('SurveyQuestions');
    mod.controller("surveyListController", ["$scope","$http", "$location", surveyList]);

    function surveyList($scope, $http, $location) {

        $scope.message = "Survey List";

        $http.get('http://localhost:3000/surveylist/')
        .then((response) => {
            $scope.surveylist = response.data;
            $scope.userResponse = [];
        })

        $scope.onAddQuestions = (surveyId) => {
            $location.path('/addquestion/:' + surveyId);
        }



    }
}());