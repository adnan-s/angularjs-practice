var mod = angular.module('SurveyQuestions');
mod.controller('addQuestionController', ['$scope',
    'surveyFactory',
    '$routeParams',
    function ($scope, surveyFactory, $routeParams) {
        const surveyId = $routeParams.id;
        $scope.title = "Add Questions";

        $scope.question = {
            surveyId: surveyId,
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
            surveyFactory.AddQuestion.then((data) => {
                alert('Record added successfully.');
                $scope.question = {
                    surveyId: surveyId,
                    description: '',
                    options: []
                }
            }, (error) => {
                console.log(error);
            });
        }

    }
]);

