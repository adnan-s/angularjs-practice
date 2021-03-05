(function () {
    var mod = angular.module('SurveyQuestions');
    mod.controller('addQuestionController', ['$scope', '$http', '$location', addQuestion]);

    function addQuestion($scope, $http, $location) {
        $scope.title = "Add Questions";

        $scope.question = {
            surveyId: 1,
            description: '',
            options: [

            ]
        }

        $scope.addOption = () => {
            $scope.question.options.push({
                text: '', type: ''
            })
        }

        $scope.deleteOption = (index) => {
            $scope.question.options.splice(index, 1);
        }

        $scope.saveQuestion = () => {
            $http({
                method: 'POST',
                url: 'http://localhost:3000/addquestion',
                data: $scope.question
            }).then((res) => {
                console.log(res.data);
                $scope.question = {
                    surveyId: 1,
                    description: '',
                    options: []
                }
            }, (error) => {
                console.log(error);
            });
        }

    }


}());