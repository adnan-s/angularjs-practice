(function () {

    var mod = angular.module("SurveyQuestions");

    function myfunction($scope, $http) {
        $scope.title = "Create New Survey";

        $scope.survey = {
            name: '', description: '', startDate: '', endDate: '', isPublic: false
        }

        $scope.onSaveClick = () => {
            $http({
                method: 'POST',
                url: 'http://localhost:3000/survey',
                data: $scope.survey
            })
            .then((response) => {
                console.log('success');
            }, (error) => {
                console.log(error);
            });
        }
    }

    mod.controller("CreateSurveyController", ["$scope", "$http", myfunction]);

}());