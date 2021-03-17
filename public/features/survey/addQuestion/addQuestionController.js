(function () {
    var mod = angular.module('SurveyQuestions');
    mod.controller('addQuestionController', ['$scope', 'surveyFactory', '$location', addQuestion]);

    function addQuestion($scope, surveyFactory, $location) {
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
            surveyFactory.AddQuestion.then((data) => {
                alert('Record added successfully.');
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