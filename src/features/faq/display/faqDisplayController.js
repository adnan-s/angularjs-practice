var mod = angular.module("SurveyQuestions");
mod.controller("faqDisplayController", ["$scope", "faqFactory",
    function ($scope, faqFactory) {
        faqFactory.GetAll()
            .then(data => {
                $scope.faqs = data;
            })
    }
]);
