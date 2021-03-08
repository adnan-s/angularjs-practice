(function () {

    var mod = angular.module("SurveyQuestions");
    mod.controller("TakeSurveyController", ["$scope", "$http", myfunction]);

    function myfunction($scope, $http) {

        $http.get('http://localhost:3000/questions')
        .then((response) => {
            $scope.questions = response.data;
            $scope.userResponse = [
                { SurveyId: 1, QuestionId: 1, Response: ''}
            ];
        });

        $scope.SaveResponse = () => {
            console.log($scope.userResponse);
        }

        $scope.radioChecked = (questionId, text) => {
            console.log(questionId, text);
            // check if user has already responded for this question or not. 
            // if he has then update the response in userResponse Array.
            // if he hasn't then add the user response in array.
        }

    }


}());