(function () {

    var mod = angular.module("SurveyQuestions");
    mod.controller("TakeSurveyController", ["$scope", "$http", "$routeParams", myfunction]);

    function myfunction($scope, $http, $routeParams) {

        const surveyId = $routeParams.surveyId;
        $http.get('http://localhost:8080/question/' + surveyId)
        .then((response) => {
            $scope.questions = response.data;
            $scope.userResponse = [
                { surveyId: surveyId, questionId: 1, response: ''}
            ];
        });

        $scope.SaveResponse = () => {
            $http({
                method: 'POST',
                url: 'http://localhost:8080/quote',
                data: $scope.userResponse
            }).then((res) => {
                console.log(res.data);
                $scope.question = { surveyId:1, questionId: '', response: ''}
            }, (error) => {
                console.log(error);
            });
        }

        $scope.radioChecked = (questionId, text) => {
            var existingResponse = $scope.userResponse.filter(e => e.questionId === questionId)[0];
            if (existingResponse) {
                existingResponse.response = text;
            } else {
                const ans = { surveyId: surveyId, questionId: questionId, response: text };
                $scope.userResponse.push(ans);
            }
        }

    }


}());