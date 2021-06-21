var mod = angular.module("SurveyQuestions")
mod.controller("faqCreateController", ["$scope",
    "$routeParams",
    "$location",
    "faqFactory",
    function ($scope, $routeParams, $location, faqFactory) {
        $scope.title = "Add FAQ (Frequently Asked Questions)";
        const faqId = $routeParams.id ? $routeParams.id : 0;

        if (faqId > 0) {
            faqFactory.GetSingle(faqId)
                .then((data) => {
                    $scope.faq = data.data[0];
                })
        } else {
            $scope.faq = {
                faq: '', answer: ''
            }
        }

        $scope.onSaveClick = () => {
            faqFactory.Insert($scope.faq)
                .then((response) => {
                    $scope.faq = {
                        faq: '', answer: ''
                    };
                    alert('Faq added successfully.');
                }, (error) => {
                    console.log(error);
                });
        }

        $scope.onUpdateClick = () => {
            faqFactory.Update($scope.faq)
                .then((data) => {
                    alert('updated successfully.');
                    $location.path('/faqlist');
                });
        }
    }
]);
