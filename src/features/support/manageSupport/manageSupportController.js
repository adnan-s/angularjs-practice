(function () {

    var mod = angular.module('SurveyQuestions');
    mod.controller("manageSupportController", ["$scope","supportFactory", "$location", supportList]);

    function supportList($scope, supportFactory, $location) {

        $scope.title = "Support here";

        supportFactory.getAll()
        .then((data) => {
            $scope.supportlist = data;
        })

        $scope.onEditSupportClick = (Id) => {
            $location.path('/supportinfo/' + Id);
        }

    }
}());