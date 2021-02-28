(function () {

    var mod = angular.module("SurveyQuestions");

    function AboutUs($scope) {
        $scope.message = "about page.";
    }

    mod.controller("AboutUs", ["$scope", AboutUs]);

}());