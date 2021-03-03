(function () {

    var mod = angular.module('SurveyQuestions');
    mod.controller("surveyListController", ["$scope","$http", surveyList]);

    function surveyList($scope, $http) {

        $scope.message = "Survey List";

        $http.get('http://localhost:3000/surveylist/')
        .then((response) => {
            $scope.surveylist = response.data;
            $scope.userResponse = [];
        })

        $scope.onAddQuestions = (surveyId) => {
            console.log('this survey id:', surveyId);
        }



    }
}());