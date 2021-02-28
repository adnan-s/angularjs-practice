(function () {

    var mod = angular.module("SurveyQuestions");

    function home($scope) {
        $scope.message = "Message from home controller.";
    }

    mod.controller("homeController", ["$scope", home]);

}());