(function () {
    var mod = angular.module('SurveyQuestions');
    mod.controller('addQuestionController', ['$scope', '$http', addQuestion]);

    function addQuestion($scope, $http) {
        $scope.title = "Add Questions";
    }


}());