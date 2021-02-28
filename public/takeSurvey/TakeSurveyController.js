(function () {

    var mod = angular.module("SurveyQuestions");

    function myfunction($scope, $http) {
        
        $scope.index = 0;
        
        $http.get('http://localhost:3000/questions')
        .then((response) => {
            $scope.questions = response.data;
            $scope.userResponse = [];    
        })

        $scope.next = () => {
            if($scope.index < $scope.questions.length -1) {
                $scope.index++;
            }
        };

        $scope.previous =() => {
            if($scope.index >= 1) {
               $scope.index --;
            }
        };
    }

    mod.controller("TakeSurveyController", ["$scope", "$http", myfunction]);

}());