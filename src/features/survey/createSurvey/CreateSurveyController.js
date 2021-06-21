var mod = angular.module("SurveyQuestions");
mod.controller("CreateSurveyController", ["$scope", "$http",
    function ($scope, $http) {
        $scope.title = "Create New Survey";

        $scope.survey = {
            name: '', description: '', startDate: '', endDate: '', isPublic: false
        }

        $scope.onSaveClick = () => {
            $http({
                method: 'POST',
                url: 'http://localhost:8080/survey',
                data: $scope.survey
            })
                .then((response) => {
                    console.log('success');
                }, (error) => {
                    console.log(error);
                });
        }
    }
]);

