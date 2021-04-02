(function(){
    
    var mod = angular.module('SurveyQuestions');
    mod.controller("surveyBoardController", ["$scope", surveyBoard]);

    function surveyBoard($scope) {

        $scope.title = "Survey Board";

    }
}());