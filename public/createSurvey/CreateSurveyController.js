(function () {

    var mod = angular.module("SurveyQuestions");

    function myfunction($scope) {
        $scope.message = "Message from CreateSurveyController!!";
    }

    mod.controller("CreateSurveyController", ["$scope", myfunction]);

}());